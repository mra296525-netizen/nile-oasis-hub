import { GraduationCap, Globe, Users, Lightbulb, Music, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ProgramsSectionProps {
  language: 'ar' | 'en';
}

const ProgramsSection = ({ language }: ProgramsSectionProps) => {
  const content = {
    ar: {
      title: "البرامج الأكاديمية والأنشطة",
      subtitle: "برامج تعليمية شاملة تنمي مهارات الطلاب في جميع المجالات",
      enrollNow: "سجل الآن",
      learnMore: "اعرف أكثر",
      programs: [
        {
          id: 1,
          title: "رياض الأطفال",
          description: "برنامج تأسيسي يركز على التعلم من خلال اللعب وتنمية المهارات الأساسية للأطفال من سن 3-5 سنوات.",
          icon: <Users className="w-8 h-8" />,
          age: "3-5 سنوات",
          duration: "سنتان",
          capacity: 20,
          enrolled: 18,
          features: ["تعلم تفاعلي", "أنشطة حركية", "تنمية إبداعية"],
          color: "bg-gradient-to-br from-pink-500 to-purple-600"
        },
        {
          id: 2,
          title: "المرحلة الابتدائية",
          description: "تعليم أساسي قوي في اللغات والعلوم والرياضيات مع التركيز على بناء شخصية الطالب.",
          icon: <GraduationCap className="w-8 h-8" />,
          age: "6-11 سنة",
          duration: "6 سنوات",
          capacity: 25,
          enrolled: 23,
          features: ["منهج ثنائي اللغة", "مختبرات علمية", "أنشطة رياضية"],
          color: "bg-gradient-to-br from-blue-500 to-cyan-600"
        },
        {
          id: 3,
          title: "المرحلة الإعدادية",
          description: "إعداد متقدم للمرحلة الثانوية مع التركيز على التفكير النقدي والابتكار.",
          icon: <Lightbulb className="w-8 h-8" />,
          age: "12-14 سنة",
          duration: "3 سنوات",
          capacity: 30,
          enrolled: 27,
          features: ["تعلم قائم على المشاريع", "تكنولوجيا متقدمة", "مهارات القيادة"],
          color: "bg-gradient-to-br from-green-500 to-emerald-600"
        },
        {
          id: 4,
          title: "برنامج اللغات",
          description: "تطوير مهارات اللغة العربية والإنجليزية مع إمكانية تعلم لغات إضافية.",
          icon: <Globe className="w-8 h-8" />,
          age: "جميع الأعمار",
          duration: "مستمر",
          capacity: 15,
          enrolled: 12,
          features: ["محادثة متقدمة", "ثقافات متنوعة", "شهادات معتمدة"],
          color: "bg-gradient-to-br from-orange-500 to-red-600"
        },
        {
          id: 5,
          title: "الأنشطة الفنية",
          description: "برامج متنوعة في الموسيقى والفنون التشكيلية والمسرح لتنمية المواهب الإبداعية.",
          icon: <Palette className="w-8 h-8" />,
          age: "6-18 سنة",
          duration: "فصلي",
          capacity: 20,
          enrolled: 16,
          features: ["معارض فنية", "حفلات موسيقية", "مسرح مدرسي"],
          color: "bg-gradient-to-br from-purple-500 to-pink-600"
        },
        {
          id: 6,
          title: "الأنشطة الموسيقية",
          description: "تعلم الآلات الموسيقية والغناء مع تكوين فرق موسيقية مدرسية.",
          icon: <Music className="w-8 h-8" />,
          age: "8-18 سنة",
          duration: "سنوي",
          capacity: 25,
          enrolled: 20,
          features: ["آلات متنوعة", "فرق موسيقية", "حفلات سنوية"],
          color: "bg-gradient-to-br from-indigo-500 to-blue-600"
        }
      ]
    },
    en: {
      title: "Academic Programs & Activities",
      subtitle: "Comprehensive educational programs that develop students' skills in all areas",
      enrollNow: "Enroll Now",
      learnMore: "Learn More",
      programs: [
        {
          id: 1,
          title: "Kindergarten",
          description: "Foundation program focusing on learning through play and developing basic skills for children aged 3-5 years.",
          icon: <Users className="w-8 h-8" />,
          age: "3-5 years",
          duration: "2 years",
          capacity: 20,
          enrolled: 18,
          features: ["Interactive Learning", "Physical Activities", "Creative Development"],
          color: "bg-gradient-to-br from-pink-500 to-purple-600"
        },
        {
          id: 2,
          title: "Primary School",
          description: "Strong foundation in languages, sciences, and mathematics with focus on character building.",
          icon: <GraduationCap className="w-8 h-8" />,
          age: "6-11 years",
          duration: "6 years",
          capacity: 25,
          enrolled: 23,
          features: ["Bilingual Curriculum", "Science Labs", "Sports Activities"],
          color: "bg-gradient-to-br from-blue-500 to-cyan-600"
        },
        {
          id: 3,
          title: "Preparatory School",
          description: "Advanced preparation for secondary education with focus on critical thinking and innovation.",
          icon: <Lightbulb className="w-8 h-8" />,
          age: "12-14 years",
          duration: "3 years",
          capacity: 30,
          enrolled: 27,
          features: ["Project-Based Learning", "Advanced Technology", "Leadership Skills"],
          color: "bg-gradient-to-br from-green-500 to-emerald-600"
        },
        {
          id: 4,
          title: "Language Program",
          description: "Developing Arabic and English language skills with option to learn additional languages.",
          icon: <Globe className="w-8 h-8" />,
          age: "All Ages",
          duration: "Ongoing",
          capacity: 15,
          enrolled: 12,
          features: ["Advanced Conversation", "Diverse Cultures", "Certified Programs"],
          color: "bg-gradient-to-br from-orange-500 to-red-600"
        },
        {
          id: 5,
          title: "Arts Activities",
          description: "Diverse programs in music, visual arts, and theater to develop creative talents.",
          icon: <Palette className="w-8 h-8" />,
          age: "6-18 years",
          duration: "Semester",
          capacity: 20,
          enrolled: 16,
          features: ["Art Exhibitions", "Music Concerts", "School Theater"],
          color: "bg-gradient-to-br from-purple-500 to-pink-600"
        },
        {
          id: 6,
          title: "Music Activities",
          description: "Learning musical instruments and singing with formation of school music bands.",
          icon: <Music className="w-8 h-8" />,
          age: "8-18 years",
          duration: "Annual",
          capacity: 25,
          enrolled: 20,
          features: ["Various Instruments", "Music Bands", "Annual Concerts"],
          color: "bg-gradient-to-br from-indigo-500 to-blue-600"
        }
      ]
    }
  };

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].programs.map((program, index) => (
            <Card 
              key={program.id}
              className="group hover:shadow-card transition-smooth border-0 bg-card hover:-translate-y-2 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${program.color} opacity-10 group-hover:opacity-20 transition-smooth`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 rounded-full ${program.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-bounce`}>
                    {program.icon}
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                    {program.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
                    <span>• {language === 'ar' ? 'العمر:' : 'Age:'} {program.age}</span>
                    <span>• {language === 'ar' ? 'المدة:' : 'Duration:'} {program.duration}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative">
                <CardDescription className="text-base leading-relaxed mb-6">
                  {program.description}
                </CardDescription>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">
                    {language === 'ar' ? 'المميزات:' : 'Features:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enrollment Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>{language === 'ar' ? 'المسجلين:' : 'Enrolled:'}</span>
                    <span>{program.enrolled}/{program.capacity}</span>
                  </div>
                  <Progress 
                    value={(program.enrolled / program.capacity) * 100} 
                    className="h-2"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth hover-scale"
                    variant="outline"
                  >
                    {content[language].learnMore}
                  </Button>
                  <Button 
                    className={`flex-1 ${program.color} border-0 hover:opacity-90 hover-scale`}
                  >
                    {content[language].enrollNow}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'ابدأ رحلة التعلم اليوم' : 'Start Your Learning Journey Today'}
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'انضم إلى مجتمع تعليمي متميز يساعد الطلاب على تحقيق أحلامهم وطموحاتهم'
                : 'Join an exceptional educational community that helps students achieve their dreams and aspirations'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-gold text-lg px-8 hover-scale"
              >
                {language === 'ar' ? 'احجز جولة' : 'Book a Tour'}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 hover-scale"
              >
                {language === 'ar' ? 'تحدث مع مستشار' : 'Talk to Advisor'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;