import { FileText, Calendar, Users, CheckCircle, AlertCircle, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface AdmissionSectionProps {
  language: 'ar' | 'en';
}

const AdmissionSection = ({ language }: AdmissionSectionProps) => {
  const content = {
    ar: {
      title: "القبول والتسجيل",
      subtitle: "انضم إلى عائلة مدرسة النيل واحصل على تعليم متميز",
      applyNow: "تقدم الآن",
      downloadForm: "تحميل النموذج",
      scheduleVisit: "احجز زيارة",
      contactUs: "اتصل بنا",
      requirements: {
        title: "متطلبات التقديم",
        items: [
          "شهادة ميلاد الطالب (أصل + صورة)",
          "آخر شهادة دراسية (أصل + صورة)",
          "4 صور شخصية حديثة للطالب",
          "صورة من بطاقة الرقم القومي لولي الأمر",
          "استمارة التقديم مكتملة",
          "رسوم التقديم 500 جنيه (غير مسترددة)"
        ]
      },
      process: {
        title: "خطوات التقديم",
        steps: [
          {
            number: 1,
            title: "ملء الاستمارة",
            description: "قم بتعبئة استمارة التقديم بالمعلومات المطلوبة",
            icon: <FileText className="w-6 h-6" />
          },
          {
            number: 2,
            title: "تقديم المستندات",
            description: "إحضار جميع المستندات المطلوبة للمدرسة",
            icon: <CheckCircle className="w-6 h-6" />
          },
          {
            number: 3,
            title: "المقابلة الشخصية",
            description: "مقابلة مع الطالب وولي الأمر مع الإدارة",
            icon: <Users className="w-6 h-6" />
          },
          {
            number: 4,
            title: "قرار القبول",
            description: "سيتم إخطاركم بنتيجة التقديم خلال أسبوع",
            icon: <AlertCircle className="w-6 h-6" />
          }
        ]
      },
      fees: {
        title: "الرسوم الدراسية للعام 2024-2025",
        items: [
          { level: "رياض الأطفال", fee: "15,000", period: "سنوياً" },
          { level: "المرحلة الابتدائية", fee: "18,000", period: "سنوياً" },
          { level: "المرحلة الإعدادية", fee: "22,000", period: "سنوياً" },
          { level: "المرحلة الثانوية", fee: "25,000", period: "سنوياً" }
        ],
        note: "تشمل الرسوم الكتب والأنشطة. خصم 10% للدفع المبكر"
      },
      dates: {
        title: "مواعيد مهمة",
        items: [
          { event: "بداية التسجيل", date: "1 فبراير 2024", status: "active" },
          { event: "آخر موعد للتقديم", date: "30 أبريل 2024", status: "upcoming" },
          { event: "إعلان النتائج", date: "15 مايو 2024", status: "upcoming" },
          { event: "بداية العام الدراسي", date: "1 سبتمبر 2024", status: "upcoming" }
        ]
      }
    },
    en: {
      title: "Admission & Registration",
      subtitle: "Join the Nile School family and receive excellent education",
      applyNow: "Apply Now",
      downloadForm: "Download Form",
      scheduleVisit: "Schedule Visit",
      contactUs: "Contact Us",
      requirements: {
        title: "Application Requirements",
        items: [
          "Student's birth certificate (original + copy)",
          "Latest academic certificate (original + copy)",
          "4 recent passport photos of the student",
          "Copy of parent's national ID",
          "Completed application form",
          "Application fee 500 EGP (non-refundable)"
        ]
      },
      process: {
        title: "Application Process",
        steps: [
          {
            number: 1,
            title: "Fill Application",
            description: "Complete the application form with required information",
            icon: <FileText className="w-6 h-6" />
          },
          {
            number: 2,
            title: "Submit Documents",
            description: "Bring all required documents to the school",
            icon: <CheckCircle className="w-6 h-6" />
          },
          {
            number: 3,
            title: "Interview",
            description: "Interview with student and parent with administration",
            icon: <Users className="w-6 h-6" />
          },
          {
            number: 4,
            title: "Admission Decision",
            description: "You will be notified of the application result within a week",
            icon: <AlertCircle className="w-6 h-6" />
          }
        ]
      },
      fees: {
        title: "Tuition Fees for 2024-2025",
        items: [
          { level: "Kindergarten", fee: "15,000", period: "annually" },
          { level: "Primary School", fee: "18,000", period: "annually" },
          { level: "Preparatory School", fee: "22,000", period: "annually" },
          { level: "Secondary School", fee: "25,000", period: "annually" }
        ],
        note: "Fees include books and activities. 10% discount for early payment"
      },
      dates: {
        title: "Important Dates",
        items: [
          { event: "Registration Opens", date: "February 1, 2024", status: "active" },
          { event: "Application Deadline", date: "April 30, 2024", status: "upcoming" },
          { event: "Results Announcement", date: "May 15, 2024", status: "upcoming" },
          { event: "Academic Year Begins", date: "September 1, 2024", status: "upcoming" }
        ]
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'upcoming': return 'bg-blue-500';
      case 'closed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="admission" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Application Process */}
          <Card className="animate-fade-in border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <Info className="w-6 h-6" />
                {content[language].process.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {content[language].process.steps.map((step, index) => (
                  <div key={step.number} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-bounce">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                    <div className="text-primary group-hover:scale-110 transition-bounce">
                      {step.icon}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="animate-fade-in border-0 shadow-card" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <FileText className="w-6 h-6" />
                {content[language].requirements.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {content[language].requirements.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-bounce" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-smooth">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Fees and Dates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Tuition Fees */}
          <Card className="animate-fade-in border-0 shadow-card" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                {content[language].fees.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {content[language].fees.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-smooth">
                    <span className="font-medium">{item.level}</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">{item.fee}</span>
                      <span className="text-sm text-muted-foreground block">
                        {language === 'ar' ? 'جنيه ' : 'EGP '}
                        {item.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <p className="text-sm text-muted-foreground text-center">
                {content[language].fees.note}
              </p>
            </CardContent>
          </Card>

          {/* Important Dates */}
          <Card className="animate-fade-in border-0 shadow-card" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                {content[language].dates.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {content[language].dates.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-smooth">
                    <Badge className={`${getStatusColor(item.status)} text-white`}>
                      {item.status === 'active' ? (language === 'ar' ? 'نشط' : 'Active') : 
                       item.status === 'upcoming' ? (language === 'ar' ? 'قادم' : 'Upcoming') : 
                       (language === 'ar' ? 'مغلق' : 'Closed')}
                    </Badge>
                    <div className="flex-1">
                      <h4 className="font-medium">{item.event}</h4>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'ar' ? 'ابدأ رحلة طفلك التعليمية معنا' : 'Start Your Child\'s Educational Journey With Us'}
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-gold text-lg px-8 hover-scale"
              >
                {content[language].applyNow}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 hover-scale"
              >
                {content[language].downloadForm}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 hover-scale"
              >
                {content[language].scheduleVisit}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;