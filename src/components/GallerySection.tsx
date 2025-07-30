import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Maximize } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import classroomImage from "@/assets/classroom-1.jpg";
import labActivities from "@/assets/lab-activities.jpg";
import sportsActivities from "@/assets/sports-activities.jpg";
import awardsCeremony from "@/assets/awards-ceremony.jpg";

interface GallerySectionProps {
  language: 'ar' | 'en';
}

const GallerySection = ({ language }: GallerySectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const content = {
    ar: {
      title: "معرض الصور",
      subtitle: "شاهد أجمل اللحظات والذكريات في مدرسة النيل",
      categories: [
        { id: 'all', label: 'الكل' },
        { id: 'classroom', label: 'الفصول الدراسية' },
        { id: 'activities', label: 'الأنشطة' },
        { id: 'events', label: 'الفعاليات' },
        { id: 'achievements', label: 'الإنجازات' }
      ],
      viewFull: "عرض كامل"
    },
    en: {
      title: "Photo Gallery",
      subtitle: "Explore the beautiful moments and memories at Nile School",
      categories: [
        { id: 'all', label: 'All' },
        { id: 'classroom', label: 'Classrooms' },
        { id: 'activities', label: 'Activities' },
        { id: 'events', label: 'Events' },
        { id: 'achievements', label: 'Achievements' }
      ],
      viewFull: "View Full"
    }
  };

  const galleryImages = [
    {
      id: 1,
      src: classroomImage,
      title: language === 'ar' ? 'فصل دراسي حديث' : 'Modern Classroom',
      category: 'classroom',
      description: language === 'ar' ? 'طلابنا في بيئة تعليمية متطورة' : 'Our students in an advanced learning environment'
    },
    {
      id: 2,
      src: labActivities,
      title: language === 'ar' ? 'مختبر العلوم' : 'Science Laboratory',
      category: 'activities',
      description: language === 'ar' ? 'أنشطة عملية في مختبر العلوم' : 'Practical activities in the science lab'
    },
    {
      id: 3,
      src: sportsActivities,
      title: language === 'ar' ? 'الأنشطة الرياضية' : 'Sports Activities',
      category: 'activities',
      description: language === 'ar' ? 'طلابنا يمارسون الرياضة بحماس' : 'Our students engaging in sports with enthusiasm'
    },
    {
      id: 4,
      src: awardsCeremony,
      title: language === 'ar' ? 'حفل التكريم' : 'Awards Ceremony',
      category: 'achievements',
      description: language === 'ar' ? 'تكريم الطلاب المتفوقين' : 'Honoring outstanding students'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
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

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {content[language].categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentImageIndex(0);
              }}
              className={`hover-scale transition-smooth ${
                selectedCategory === category.id 
                  ? 'bg-gradient-primary shadow-primary' 
                  : 'hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Featured Image Display */}
        {filteredImages.length > 0 && (
          <div className="mb-12 animate-scale-in">
            <Card className="overflow-hidden border-0 shadow-card">
              <div className="relative">
                <img
                  src={filteredImages[currentImageIndex].src}
                  alt={filteredImages[currentImageIndex].title}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Navigation Arrows */}
                {filteredImages.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="lg"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover-scale"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="lg"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover-scale"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-8 h-8" />
                    </Button>
                  </>
                )}

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {filteredImages[currentImageIndex].title}
                      </h3>
                      <p className="text-white/90">
                        {filteredImages[currentImageIndex].description}
                      </p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="lg" 
                      className="text-white hover:bg-white/20 hover-scale"
                    >
                      <Maximize className="w-6 h-6" />
                    </Button>
                  </div>
                </div>

                {/* Image Counter */}
                {filteredImages.length > 1 && (
                  <Badge className="absolute top-4 right-4 bg-black/50 text-white">
                    {currentImageIndex + 1} / {filteredImages.length}
                  </Badge>
                )}
              </div>
            </Card>
          </div>
        )}

        {/* Image Thumbnails Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id}
              className={`overflow-hidden cursor-pointer group hover-scale transition-smooth animate-fade-in ${
                index === currentImageIndex ? 'ring-2 ring-primary shadow-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setCurrentImageIndex(index)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-32 md:h-40 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth flex items-center justify-center">
                  <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                {index === currentImageIndex && (
                  <div className="absolute inset-0 bg-primary/20 border-2 border-primary rounded" />
                )}
              </div>
              <CardContent className="p-3">
                <h4 className="font-medium text-sm text-center line-clamp-1">
                  {image.title}
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:shadow-gold text-lg px-8 hover-scale"
          >
            {content[language].viewFull}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;