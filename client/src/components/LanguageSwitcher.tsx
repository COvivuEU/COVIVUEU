
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'vi' ? 'fr' : 'vi')}
      className="font-medium"
    >
      {language.toUpperCase()}
    </Button>
  );
}
