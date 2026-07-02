import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

// HARDCODE THE LANGUAGES RIGHT HERE (Just like you did in the main site!)
const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ro", name: "Română", flag: "🇷🇴" },
  { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
] as const;

const LanguageSwitcher = ({ isScrolled = false }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <Select
      value={i18n.language}
      onValueChange={(value) => i18n.changeLanguage(value)}
    >
      <SelectTrigger
        className={`w-auto gap-2 border-none bg-transparent shadow-none ${
          isScrolled ? "text-foreground" : "text-primary-foreground"
        }`}
      >
        <SelectValue>
          <span className="flex items-center gap-2">
            <span>{currentLang.flag}</span>
            <span className="hidden sm:inline">
              {currentLang.code.toUpperCase()}
            </span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-card border border-border z-50">
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <span className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
