import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolLogo from "@/assets/school-logo.png";

interface HeaderProps {
  language: 'ar' | 'en';
  onLanguageChange: (lang: 'ar' | 'en') => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = {
    ar: [
      { label: "الرئيسية", href: "#home" },
      { label: "عن المدرسة", href: "#about" },
      { label: "الأخبار", href: "#news" },
      { label: "المعرض", href: "#gallery" },
      { label: "القبول", href: "#admission" },
      { label: "الأكاديمية", href: "#academic" },
      { label: "دليل الوالدين", href: "#parents" },
      { label: "اتصل بنا", href: "#contact" }
    ],
    en: [
      { label: "Home", href: "#home" },
      { label: "About School", href: "#about" },
      { label: "News", href: "#news" },
      { label: "Gallery", href: "#gallery" },
      { label: "Admission", href: "#admission" },
      { label: "Academic", href: "#academic" },
      { label: "Parent's Guide", href: "#parents" },
      { label: "Contact Us", href: "#contact" }
    ]
  };

  return (
    <header className="bg-background shadow-card sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and School Name */}
          <div className="flex items-center gap-4">
            <img 
              src={schoolLogo} 
              alt="Nile Private School Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">
                {language === 'ar' ? 'مدرسة النيل الخاصة للغات' : 'Nile Private School for Languages'}
              </h1>
              <p className="text-sm text-muted-foreground">
                {language === 'ar' ? 'التميز في التعليم' : 'Excellence in Education'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems[language].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-smooth" />
              </a>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onLanguageChange(language === 'ar' ? 'en' : 'ar')}
              className="hidden md:flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === 'ar' ? 'English' : 'العربية'}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background pb-6">
            <nav className="flex flex-col gap-4 pt-6">
              {menuItems[language].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => onLanguageChange(language === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-2 w-fit mt-4"
              >
                <Globe className="w-4 h-4" />
                {language === 'ar' ? 'English' : 'العربية'}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;