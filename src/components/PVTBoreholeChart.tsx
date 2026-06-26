import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Zap, Layers, RotateCcw } from 'lucide-react';

// PVT panel data: thermal effect per panel, calculating equivalent borehole meters
// Copa Solar PVT specification: 2.75 MWp thermal for 1000 panels = 2,750Wp per panel
const DEFAULT_THERMAL_EFFECT_PER_PANEL = 2750; // Wp (rated thermal effect per PVT panel)
const DEFAULT_BOREHOLE_WATTS_PER_METER = 35; // Wp/m (default value)
const PANEL_COUNTS = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40];

const PVTBoreholeChart = () => {
  const [selectedBoreholeMeters, setSelectedBoreholeMeters] = useState(1500);
  const [inputValue, setInputValue] = useState('1500');
  const [boreholeWattsPerMeter, setBoreholeWattsPerMeter] = useState(DEFAULT_BOREHOLE_WATTS_PER_METER);
  const [wpInputValue, setWpInputValue] = useState(DEFAULT_BOREHOLE_WATTS_PER_METER.toString());
  const [thermalEffectPerPanel, setThermalEffectPerPanel] = useState(DEFAULT_THERMAL_EFFECT_PER_PANEL);
  const [thermalInputValue, setThermalInputValue] = useState(DEFAULT_THERMAL_EFFECT_PER_PANEL.toString());
  
  const metersPerPanel = thermalEffectPerPanel / boreholeWattsPerMeter;
  const panelsNeeded = Math.ceil(selectedBoreholeMeters / metersPerPanel);
  const thermalEffect = panelsNeeded * thermalEffectPerPanel;
  
  const panelData = PANEL_COUNTS.map(panels => ({
    panels,
    thermalEffect: panels * thermalEffectPerPanel,
    boreholeMeters: Math.round((panels * thermalEffectPerPanel) / boreholeWattsPerMeter),
  }));

  const handleWpInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWpInputValue(value);
    
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 10 && numValue <= 100) {
      setBoreholeWattsPerMeter(numValue);
    }
  };

  const handleWpInputBlur = () => {
    const numValue = parseInt(wpInputValue, 10);
    if (isNaN(numValue) || numValue < 10) {
      setBoreholeWattsPerMeter(10);
      setWpInputValue('10');
    } else if (numValue > 100) {
      setBoreholeWattsPerMeter(100);
      setWpInputValue('100');
    } else {
      setWpInputValue(numValue.toString());
    }
  };

  const handleThermalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setThermalInputValue(value);
    
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 500 && numValue <= 10000) {
      setThermalEffectPerPanel(numValue);
    }
  };

  const handleThermalInputBlur = () => {
    const numValue = parseInt(thermalInputValue, 10);
    if (isNaN(numValue) || numValue < 500) {
      setThermalEffectPerPanel(500);
      setThermalInputValue('500');
    } else if (numValue > 10000) {
      setThermalEffectPerPanel(10000);
      setThermalInputValue('10000');
    } else {
      setThermalInputValue(numValue.toString());
    }
  };

  const handleReset = () => {
    setThermalEffectPerPanel(DEFAULT_THERMAL_EFFECT_PER_PANEL);
    setThermalInputValue(DEFAULT_THERMAL_EFFECT_PER_PANEL.toString());
    setBoreholeWattsPerMeter(DEFAULT_BOREHOLE_WATTS_PER_METER);
    setWpInputValue(DEFAULT_BOREHOLE_WATTS_PER_METER.toString());
  };

  const handleSliderChange = (value: number[]) => {
    setSelectedBoreholeMeters(value[0]);
    setInputValue(value[0].toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 100 && numValue <= 6000) {
      setSelectedBoreholeMeters(numValue);
    }
  };

  const handleInputBlur = () => {
    const numValue = parseInt(inputValue, 10);
    if (isNaN(numValue) || numValue < 100) {
      setSelectedBoreholeMeters(100);
      setInputValue('100');
    } else if (numValue > 6000) {
      setSelectedBoreholeMeters(6000);
      setInputValue('6000');
    } else {
      setInputValue(numValue.toString());
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="copa-heading text-3xl md:text-4xl font-bold mb-4">
            PVT Panels vs Borehole Depth
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Equivalent borehole meters replaced by PVT panels based on rated thermal effect for the recovery and repowering of frozen Boreholes in granite
            <br />
            ({thermalEffectPerPanel.toLocaleString()}Wp/panel ÷ {boreholeWattsPerMeter}Wp/m)
          </p>
        </motion.div>

        {/* Interactive Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 md:p-8 mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h3 className="text-xl font-semibold">Interactive Calculator</h3>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted rounded-md transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {/* Configuration Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* PVT Panel Thermal Effect Input */}
              <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-muted-foreground">PVT Panel Thermal Effect</label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={thermalInputValue}
                      onChange={handleThermalInputChange}
                      onBlur={handleThermalInputBlur}
                      min={500}
                      max={10000}
                      className="w-24 text-right text-lg font-bold text-primary"
                    />
                    <span className="text-lg font-bold text-primary">Wp</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Thermal output per panel (default: {DEFAULT_THERMAL_EFFECT_PER_PANEL.toLocaleString()} Wp)
                </p>
              </div>

              {/* Borehole Wp/m Input */}
              <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-muted-foreground">Borehole Recovery Rate</label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={wpInputValue}
                      onChange={handleWpInputChange}
                      onBlur={handleWpInputBlur}
                      min={10}
                      max={100}
                      className="w-20 text-right text-lg font-bold text-primary"
                    />
                    <span className="text-lg font-bold text-primary">Wp/m</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Ground conditions (default: {DEFAULT_BOREHOLE_WATTS_PER_METER} Wp/m for granite)
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-muted-foreground">Borehole Depth to Replace (meters)</label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    min={100}
                    max={6000}
                    className="w-24 text-right text-lg font-bold text-primary"
                  />
                  <span className="text-lg font-bold text-primary">m</span>
                </div>
              </div>
              <Slider
                value={[selectedBoreholeMeters]}
                onValueChange={handleSliderChange}
                min={100}
                max={6000}
                step={50}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>100m</span>
                <span>1,500m</span>
                <span>3,000m</span>
                <span>4,500m</span>
                <span>6,000m</span>
              </div>
            </div>

            {/* Results Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-primary border border-primary rounded-lg p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Layers className="w-5 h-5 text-primary-foreground" />
                  <span className="text-sm font-medium text-primary-foreground/80">PVT Panels Needed</span>
                </div>
                <p className="text-3xl font-bold text-primary-foreground">
                  {panelsNeeded.toLocaleString()}
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Total Thermal Effect</span>
                </div>
                <p className="text-3xl font-bold text-foreground">
                  {thermalEffect >= 1000000 
                    ? `${(thermalEffect / 1000000).toFixed(2)} MWp`
                    : thermalEffect >= 1000 
                    ? `${(thermalEffect / 1000).toFixed(1)} kWp`
                    : `${thermalEffect} Wp`
                  }
                </p>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-4">
              {selectedBoreholeMeters.toLocaleString()}m ÷ {metersPerPanel.toFixed(1)}m/panel = <strong>{panelsNeeded} PVT panels</strong> needed
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg"
        >
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={panelData}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="panels" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--foreground))' }}
                  label={{ 
                    value: 'Number of PVT Panels', 
                    position: 'bottom', 
                    offset: 40,
                    fill: 'hsl(var(--foreground))'
                  }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--foreground))' }}
                  label={{ 
                    value: 'Equivalent Borehole Meters (m)', 
                    angle: -90, 
                    position: 'insideLeft',
                    fill: 'hsl(var(--foreground))',
                    style: { textAnchor: 'middle' }
                  }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                  formatter={(value: number, name: string) => {
                    if (name === 'boreholeMeters') {
                      return [`${value} m`, 'Borehole Equivalent'];
                    }
                    return [value, name];
                  }}
                  labelFormatter={(label) => `${label} PVT Panels`}
                />
                {panelsNeeded <= 50 && (
                  <ReferenceLine 
                    x={panelsNeeded} 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    label={{ 
                      value: `Panels needed: ${panelsNeeded}`, 
                      position: 'top',
                      fill: 'hsl(var(--primary))'
                    }}
                  />
                )}
                <Bar 
                  dataKey="boreholeMeters" 
                  radius={[4, 4, 0, 0]}
                >
                  {panelData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={`hsl(var(--primary))`}
                      opacity={entry.panels === panelsNeeded ? 1 : 0.5}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Key metrics table */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-left font-semibold text-foreground">PVT Panels</th>
                  <th className="py-3 px-4 text-right font-semibold text-foreground">Thermal Effect (Wp)</th>
                  <th className="py-3 px-4 text-right font-semibold text-foreground">Borehole Equivalent (m)</th>
                </tr>
              </thead>
              <tbody>
                {panelData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-border/50 transition-colors cursor-pointer ${
                      row.panels === panelsNeeded 
                        ? 'bg-primary/10 border-primary/30' 
                        : 'hover:bg-muted/30'
                    }`}
                    onClick={() => setSelectedBoreholeMeters(row.boreholeMeters)}
                  >
                    <td className="py-3 px-4 font-medium">{row.panels}</td>
                    <td className="py-3 px-4 text-right text-muted-foreground">{row.thermalEffect.toLocaleString()} Wp</td>
                    <td className="py-3 px-4 text-right font-semibold text-primary">{row.boreholeMeters} m</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Calculation:</strong> Each PVT panel provides {thermalEffectPerPanel.toLocaleString()}Wp rated thermal effect. 
              Dividing by {boreholeWattsPerMeter}Wp/m borehole capacity gives the equivalent borehole depth that can be replaced.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PVTBoreholeChart;
