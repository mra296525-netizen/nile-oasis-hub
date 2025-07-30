import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroStudents from "@/assets/hero-students.jpg";

interface HeroSectionProps {
  language: 'ar' | 'en';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroStudents,
      title: {
        ar: "مرحباً بكم في مدرسة النيل الخاصة للغات",
        en: "Welcome to Nile Private School for Languages"
      },
      subtitle: {
        ar: "نحو التميز في التعليم وبناء شخصية متوازنة",
        en: "Towards Excellence in Education and Building Balanced Personalities"
      }
    }
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: { ar: "طالب", en: "Students" }
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: "30+",
      label: { ar: "معلم مؤهل", en: "Qualified Teachers" }
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: { ar: "سنة من التميز", en: "Years of Excellence" }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt="School Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="lg"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
            onClick={nextSlide}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {slides[currentSlide].title[language]}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            {slides[currentSlide].subtitle[language]}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-gold-foreground shadow-gold text-lg px-8 py-6"
            >
              {language === 'ar' ? 'تعرف على المدرسة' : 'Learn About School'}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
            >
              {language === 'ar' ? 'التقديم الآن' : 'Apply Now'}
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-gold mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80">
                    {stat.label[language]}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentSlide ? 'bg-gold' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;