import { Calendar, Users, BookOpen, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NewsSectionProps {
  language: 'ar' | 'en';
}

const NewsSection = ({ language }: NewsSectionProps) => {
  const content = {
    ar: {
      title: "أحدث الأخبار والفعاليات",
      subtitle: "ابق على اطلاع بآخر المستجدات في مدرسة النيل",
      viewAll: "مشاهدة جميع الأخبار",
      readMore: "اقرأ المزيد",
      news: [
        {
          id: 1,
          title: "نتائج ممتازة في امتحانات الفصل الدراسي الأول",
          excerpt: "حققت مدرسة النيل نتائج متميزة في امتحانات الفصل الدراسي الأول، حيث حصل 95% من الطلاب على درجات ممتازة.",
          date: "2024-01-15",
          category: "أكاديمي",
          icon: <Trophy className="w-5 h-5" />,
          urgent: true
        },
        {
          id: 2,
          title: "معرض العلوم السنوي يبهر الزوار",
          excerpt: "شهد المعرض العلمي السنوي مشاركة واسعة من الطلاب مع عرض مشاريع علمية مبتكرة في مختلف المجالات.",
          date: "2024-01-10",
          category: "فعاليات",
          icon: <BookOpen className="w-5 h-5" />,
          urgent: false
        },
        {
          id: 3,
          title: "تسجيل جديد مفتوح للعام الدراسي القادم",
          excerpt: "بدء فتح باب التسجيل للطلاب الجدد للعام الدراسي 2024-2025 مع تقديم خصومات خاصة للتسجيل المبكر.",
          date: "2024-01-05",
          category: "قبول",
          icon: <Users className="w-5 h-5" />,
          urgent: true
        }
      ]
    },
    en: {
      title: "Latest News & Events",
      subtitle: "Stay updated with the latest developments at Nile School",
      viewAll: "View All News",
      readMore: "Read More",
      news: [
        {
          id: 1,
          title: "Outstanding Results in First Semester Exams",
          excerpt: "Nile School achieved excellent results in the first semester exams, with 95% of students earning outstanding grades.",
          date: "2024-01-15",
          category: "Academic",
          icon: <Trophy className="w-5 h-5" />,
          urgent: true
        },
        {
          id: 2,
          title: "Annual Science Fair Amazes Visitors",
          excerpt: "The annual science fair witnessed wide participation from students showcasing innovative scientific projects in various fields.",
          date: "2024-01-10",
          category: "Events",
          icon: <BookOpen className="w-5 h-5" />,
          urgent: false
        },
        {
          id: 3,
          title: "New Registration Open for Next Academic Year",
          excerpt: "Registration is now open for new students for the 2024-2025 academic year with special discounts for early registration.",
          date: "2024-01-05",
          category: "Admission",
          icon: <Users className="w-5 h-5" />,
          urgent: true
        }
      ]
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'ar' 
      ? date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section id="news" className="py-20 bg-background">
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

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {content[language].news.map((newsItem, index) => (
            <Card 
              key={newsItem.id} 
              className="group hover:shadow-card transition-smooth border-0 bg-card hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-primary">
                    {newsItem.icon}
                    <span className="text-sm font-medium">{newsItem.category}</span>
                  </div>
                  {newsItem.urgent && (
                    <Badge className="bg-destructive text-destructive-foreground animate-pulse">
                      {language === 'ar' ? 'عاجل' : 'Urgent'}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-smooth story-link">
                  {newsItem.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {formatDate(newsItem.date)}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-6">
                  {newsItem.excerpt}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth hover-scale"
                >
                  {content[language].readMore}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-primary text-lg px-8 hover-scale"
          >
            {content[language].viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;