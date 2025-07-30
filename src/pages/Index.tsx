import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import GallerySection from "@/components/GallerySection";
import ProgramsSection from "@/components/ProgramsSection";
import AdmissionSection from "@/components/AdmissionSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const handleLanguageChange = (lang: 'ar' | 'en') => {
    setLanguage(lang);
    // Update document direction for RTL support
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    // Apply font family based on language
    document.documentElement.style.fontFamily = lang === 'ar' ? 'Cairo, sans-serif' : 'Inter, sans-serif';
  };

  useEffect(() => {
    // Set initial language settings
    handleLanguageChange('ar');
  }, []);

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <NewsSection language={language} />
      <GallerySection language={language} />
      <ProgramsSection language={language} />
      <AdmissionSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
