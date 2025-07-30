import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import schoolLogo from "@/assets/school-logo.png";

interface FooterProps {
  language: 'ar' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    ar: {
      description: "مدرسة النيل الخاصة للغات - نحو التميز في التعليم وبناء شخصية متوازنة مؤهلة بالقيم الإنسانية الإيجابية.",
      quickLinks: {
        title: "روابط سريعة",
        links: [
          { label: "الرئيسية", href: "#home" },
          { label: "عن المدرسة", href: "#about" },
          { label: "الأخبار", href: "#news" },
          { label: "المعرض", href: "#gallery" },
          { label: "القبول", href: "#admission" }
        ]
      },
      programs: {
        title: "البرامج التعليمية",
        links: [
          { label: "رياض الأطفال", href: "#kindergarten" },
          { label: "المرحلة الابتدائية", href: "#primary" },
          { label: "المرحلة الإعدادية", href: "#preparatory" },
          { label: "المرحلة الثانوية", href: "#secondary" },
          { label: "الأنشطة اللاصفية", href: "#activities" }
        ]
      },
      contact: {
        title: "معلومات الاتصال",
        address: "شارع النيل، المعادي، القاهرة، مصر",
        phone: "+20 2 1234 5678",
        email: "info@nilePrivateschool.edu.eg",
        hours: "الأحد - الخميس: 8:00 ص - 3:00 م"
      },
      social: {
        title: "تابعنا",
        description: "ابق على اطلاع بآخر الأخبار والفعاليات"
      },
      newsletter: {
        title: "النشرة الإخبارية",
        description: "اشترك ليصلك آخر الأخبار والتحديثات",
        placeholder: "أدخل بريدك الإلكتروني",
        button: "اشتراك"
      },
      copyright: "© 2024 مدرسة النيل الخاصة للغات. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام"
    },
    en: {
      description: "Nile Private School for Languages - Towards excellence in education and building balanced personalities qualified with positive human values.",
      quickLinks: {
        title: "Quick Links",
        links: [
          { label: "Home", href: "#home" },
          { label: "About School", href: "#about" },
          { label: "News", href: "#news" },
          { label: "Gallery", href: "#gallery" },
          { label: "Admission", href: "#admission" }
        ]
      },
      programs: {
        title: "Academic Programs",
        links: [
          { label: "Kindergarten", href: "#kindergarten" },
          { label: "Primary School", href: "#primary" },
          { label: "Preparatory School", href: "#preparatory" },
          { label: "Secondary School", href: "#secondary" },
          { label: "Extracurricular Activities", href: "#activities" }
        ]
      },
      contact: {
        title: "Contact Information",
        address: "Nile Street, Maadi, Cairo, Egypt",
        phone: "+20 2 1234 5678",
        email: "info@nilePrivateschool.edu.eg",
        hours: "Sunday - Thursday: 8:00 AM - 3:00 PM"
      },
      social: {
        title: "Follow Us",
        description: "Stay updated with our latest news and events"
      },
      newsletter: {
        title: "Newsletter",
        description: "Subscribe to receive our latest news and updates",
        placeholder: "Enter your email",
        button: "Subscribe"
      },
      copyright: "© 2024 Nile Private School for Languages. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions"
    }
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={schoolLogo} 
                alt="School Logo" 
                className="w-12 h-12 object-contain filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">
                  {language === 'ar' ? 'مدرسة النيل الخاصة' : 'Nile Private School'}
                </h3>
                <p className="text-sm opacity-80">
                  {language === 'ar' ? 'للغات' : 'for Languages'}
                </p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              {content[language].description}
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">{content[language].social.title}</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground hover:bg-primary-light hover:text-white p-2"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{content[language].quickLinks.title}</h4>
            <ul className="space-y-3">
              {content[language].quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-gold transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{content[language].programs.title}</h4>
            <ul className="space-y-3">
              {content[language].programs.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-gold transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{content[language].contact.title}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 opacity-80" />
                <div className="text-sm opacity-90">
                  {content[language].contact.address}
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 opacity-80" />
                <a 
                  href={`tel:${content[language].contact.phone}`}
                  className="text-sm opacity-90 hover:opacity-100 hover:text-gold transition-smooth"
                >
                  {content[language].contact.phone}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 opacity-80" />
                <a 
                  href={`mailto:${content[language].contact.email}`}
                  className="text-sm opacity-90 hover:opacity-100 hover:text-gold transition-smooth"
                >
                  {content[language].contact.email}
                </a>
              </div>
              
              <div className="text-sm opacity-80 mt-4">
                {content[language].contact.hours}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-light/30" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            {content[language].copyright}
          </p>
          <div className="flex gap-6">
            <a 
              href="#privacy" 
              className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-smooth"
            >
              {content[language].privacy}
            </a>
            <a 
              href="#terms" 
              className="text-sm opacity-80 hover:opacity-100 hover:text-gold transition-smooth"
            >
              {content[language].terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;