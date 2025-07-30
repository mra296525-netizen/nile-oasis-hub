import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  language: 'ar' | 'en';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    ar: {
      title: "عن مدرسة النيل الخاصة للغات",
      subtitle: "رؤيتنا ورسالتنا وأهدافنا",
      mission: {
        title: "رسالتنا",
        content: "بناء شخصية متوازنة مؤهلة بالقيم الإنسانية الإيجابية. الاهتمام بمهارات ومعارف الطلاب. إعداد مواطن صالح يؤمن بالمواطنة وقبول الآخر."
      },
      vision: {
        title: "رؤيتنا",
        content: "تقدم المدرسة تعليماً متميزاً يعد شخصاً فريداً وطالباً قادراً على المنافسة عالمياً في شكل قيادة تعليمية فريدة وفي جو من التعاون الاجتماعي."
      },
      purpose: {
        title: "بيان الهدف",
        content: "تهتم الكنيسة الإنجيلية في مصر بخدمة الوطن بفعالية من خلال مدارسها، وكجزء من المجتمع بأكمله، تهدف إلى تقديم كلية تشجع القيم الأخلاقية العالية والجدارة الأكاديمية. في الوقت نفسه، نسعى لبناء علاقات للمواطنة الصالحة، مع احترام وقبول الآخرين وإعداد جيل جديد للعيش في عالم سريع التغير."
      },
      readMore: "اقرأ المزيد"
    },
    en: {
      title: "About Nile Private School for Languages",
      subtitle: "Our Vision, Mission and Goals",
      mission: {
        title: "Our Mission",
        content: "Building a balanced personality qualified with positive human values. Caring for the skills and knowledge of the students. Preparing a good citizen who believes in citizenship and accepting others."
      },
      vision: {
        title: "Our Vision",
        content: "The school offers distinctive education that prepares a unique person and a student who is able to compete internationally in the shape of a uniquely educational leadership and in an atmosphere of social cooperation."
      },
      purpose: {
        title: "Statement of Purpose",
        content: "The Evangelical Church in Egypt is concerned to actively serve the nation through its schools and, as a part of the whole community, aims to present a College which encourages high moral values and academic merit. At the same time, we seek to build relationships for good citizenship, whilst respecting and accepting others and preparing a new generation to live in a world that is rapidly changing."
      },
      readMore: "Read More"
    }
  };

  const sections = [
    {
      icon: <Target className="w-8 h-8" />,
      title: content[language].mission.title,
      content: content[language].mission.content,
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: content[language].vision.title,
      content: content[language].vision.content,
      gradient: "bg-gradient-gold"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: content[language].purpose.title,
      content: content[language].purpose.content,
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-smooth border-0 overflow-hidden"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full ${section.gradient} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-bounce`}>
                  {section.icon}
                </div>
                <CardTitle className="text-2xl text-primary">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {section.content}
                </p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  {content[language].readMore}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'انضم إلى عائلة النيل التعليمية' : 'Join the Nile Educational Family'}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {language === 'ar' 
                ? 'نحن نؤمن بأن كل طفل يستحق تعليماً متميزاً يؤهله لمستقبل مشرق'
                : 'We believe every child deserves excellent education that prepares them for a bright future'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-gold text-lg px-8"
              >
                {language === 'ar' ? 'احجز زيارة' : 'Schedule a Visit'}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8"
              >
                {language === 'ar' ? 'تحميل الكتيب' : 'Download Brochure'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;