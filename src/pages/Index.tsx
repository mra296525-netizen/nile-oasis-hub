import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const handleLanguageChange = (lang: 'ar' | 'en') => {
    setLanguage(lang);
    // Update document direction for RTL support
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
