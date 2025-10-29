import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.story": "قصتنا",
    "nav.impact": "أثرنا",
    "nav.join": "انضم إلينا",
    "nav.contact": "اتصل بنا",

    // Hero Section
    "hero.badge": "من قلب قرانا، نصنع مستقبل الذكاء الاصطناعي",
    "hero.title.part1": "حيث يلتقي",
    "hero.title.heritage": "التراث",
    "hero.title.part2": "بـ",
    "hero.title.technology": "التقنية",
    "hero.description": "نُمكّن الأطفال والشباب من اكتساب مهارات الذكاء الاصطناعي بطريقة تطبيقية وممتعة، لنحوّل القرى إلى مراكز إنتاج رقمي وابتكار",
    "hero.cta.primary": "ابدأ رحلتك معنا",
    "hero.cta.secondary": "اكتشف قصصنا",

    // Stats
    "stats.children": "طفل تم تدريبهم",
    "stats.projects": "مشاريع رقمية",
    "stats.books": "كتب رقمية",
    "stats.participations": "مشاركات دولية",

    // Story Section
    "story.badge": "قصتنا",
    "story.title": "من القوع إلى العالم",
    "story.p1": "بدأت القصة من رؤية شخصية للمؤسّس عبدالله الدرعي، الحاصل على ماجستير في إدارة الذكاء الاصطناعي، والذي درّب خلال العامين الأخيرين أكثر من ٥٠٠٠ شخص في مجال الذكاء الاصطناعي داخل دولة الإمارات.",
    "story.p2": "لاحظ عبدالله أن المناطق البعيدة — مثل القوع — نادرًا ما تصلها مبادرات الذكاء الاصطناعي أو فرص التعليم التقني، فقرّر أن يبدأ من هناك ليحوّل التحدّي إلى قصة نجاح ملهمة.",
    "story.p3": "تحت قيادته، تحوّلت مجموعة من الأطفال إلى روّاد صغار في الابتكار الرقمي، وتم تكريمهم من قبل معالي الدكتور سلطان النيادي – وزير الشباب بعد تأليفهم كتاب \"حكايات القوع\" ومشاركتهم في برامج الروبوتات ضمن عام المجتمع.",

    // Impact Section
    "impact.badge": "أثرنا",
    "impact.title": "قصص نجاح ملهمة",
    "impact.subtitle": "من أطفال القرى إلى المسابقات العالمية",
    "impact.story1.title": "كتاب حكايات القوع",
    "impact.story1.description": "7 أطفال ألّفوا كتباً رقمية خاصة بهم تحكي قصص قريتهم",
    "impact.story1.achievement": "تكريم من معالي الدكتور سلطان النيادي",
    "impact.story2.title": "تحدي ناسا للفضاء",
    "impact.story2.description": "4 أطفال شاركوا في مسابقة NASA Space Apps Challenge",
    "impact.story2.achievement": "تمثيل الإمارات في مسابقة عالمية",
    "impact.story3.title": "وكلاء الذكاء الاصطناعي",
    "impact.story3.description": "4 أطفال (11-15 عاماً) طوروا AI Agents تعمل كنماذج أولية",
    "impact.story3.achievement": "مشاريع تقنية حقيقية من أطفال القرى",

    // Target Groups
    "join.badge": "انضم إلينا",
    "join.title": "من يمكنه الانضمام؟",
    "join.subtitle": "برامج مصممة خصيصاً لكل فئة",
    "join.children.title": "الأطفال",
    "join.children.description": "تعليم مبسّط وممتع للذكاء الاصطناعي بأساليب تفاعلية",
    "join.students.title": "الطلاب",
    "join.students.description": "تطوير مهارات البرمجة والابتكار باستخدام أدوات الذكاء الاصطناعي",
    "join.graduates.title": "الخريجون",
    "join.graduates.description": "تمكينهم من بناء مشاريع رقمية أو العمل كمستقلين",
    "join.employees.title": "الموظفون",
    "join.employees.description": "تدريبهم على توظيف الذكاء الاصطناعي لرفع الكفاءة والإنتاجية",
    "join.cta": "سجل في برامجنا",

    // Vision Section
    "vision.badge": "رؤيتنا",
    "vision.title": "نحو مستقبل رقمي مشرق",
    "vision.description": "تعمل شركة قرى AI على توسيع تجربتها من القوع إلى باقي المناطق البعيدة في الإمارات، لتصل لاحقًا إلى جميع القرى العربية، من خلال بناء شبكة تعليمية رقمية تُخرّج آلاف المتعلمين الجدد في مجال الذكاء الاصطناعي، وتحوّل القرى إلى مراكز للإبداع والابتكار.",
    "vision.cta": "كن جزءاً من الرؤية",

    // Contact Section
    "contact.title": "هل أنت مستعد للانضمام؟",
    "contact.description": "تواصل معنا اليوم وابدأ رحلتك في عالم الذكاء الاصطناعي",
    "contact.cta": "تواصل معنا الآن",

    // Footer
    "footer.about": "نُمكّن الأطفال والشباب من اكتساب مهارات الذكاء الاصطناعي بطريقة تطبيقية وممتعة، لنحوّل القرى إلى مراكز إنتاج رقمي وابتكار.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contactUs": "تواصل معنا",
    "footer.copyright": "جميع الحقوق محفوظة.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.story": "Our Story",
    "nav.impact": "Our Impact",
    "nav.join": "Join Us",
    "nav.contact": "Contact",

    // Hero Section
    "hero.badge": "From the heart of our villages, we build the future of AI",
    "hero.title.part1": "Where",
    "hero.title.heritage": "Heritage",
    "hero.title.part2": "Meets",
    "hero.title.technology": "Technology",
    "hero.description": "We empower children and youth to acquire AI skills in a practical and fun way, transforming villages into centers of digital production and innovation",
    "hero.cta.primary": "Start Your Journey",
    "hero.cta.secondary": "Discover Our Stories",

    // Stats
    "stats.children": "Children Trained",
    "stats.projects": "Digital Projects",
    "stats.books": "Digital Books",
    "stats.participations": "International Participations",

    // Story Section
    "story.badge": "Our Story",
    "story.title": "From Al-Qua to the World",
    "story.p1": "The story began with the personal vision of founder Abdullah Al-Dari, who holds a master's degree in AI Management and has trained over 5,000 people in artificial intelligence in the UAE over the past two years.",
    "story.p2": "Abdullah noticed that remote areas — such as Al-Qua — rarely receive AI initiatives or technical education opportunities, so he decided to start there to turn the challenge into an inspiring success story.",
    "story.p3": "Under his leadership, a group of children transformed into young pioneers in digital innovation and were honored by His Excellency Dr. Sultan Al Neyadi – Minister of Youth after authoring the book 'Tales of Al-Qua' and participating in robotics programs during the Year of Community.",

    // Impact Section
    "impact.badge": "Our Impact",
    "impact.title": "Inspiring Success Stories",
    "impact.subtitle": "From village children to global competitions",
    "impact.story1.title": "Tales of Al-Qua Book",
    "impact.story1.description": "7 children authored their own digital books telling their village stories",
    "impact.story1.achievement": "Honored by H.E. Dr. Sultan Al Neyadi",
    "impact.story2.title": "NASA Space Challenge",
    "impact.story2.description": "4 children participated in NASA Space Apps Challenge",
    "impact.story2.achievement": "Representing UAE in a global competition",
    "impact.story3.title": "AI Agents",
    "impact.story3.description": "4 children (ages 11-15) developed AI Agents as working prototypes",
    "impact.story3.achievement": "Real tech projects from village children",

    // Target Groups
    "join.badge": "Join Us",
    "join.title": "Who Can Join?",
    "join.subtitle": "Programs designed specifically for each group",
    "join.children.title": "Children",
    "join.children.description": "Simple and fun AI education with interactive methods",
    "join.students.title": "Students",
    "join.students.description": "Develop programming and innovation skills using AI tools",
    "join.graduates.title": "Graduates",
    "join.graduates.description": "Enable them to build digital projects or work as freelancers",
    "join.employees.title": "Employees",
    "join.employees.description": "Train them to use AI to increase efficiency and productivity",
    "join.cta": "Register for Our Programs",

    // Vision Section
    "vision.badge": "Our Vision",
    "vision.title": "Towards a Bright Digital Future",
    "vision.description": "Qura AI is expanding its experience from Al-Qua to other remote areas in the UAE, and later to all Arab villages, by building a digital educational network that graduates thousands of new learners in artificial intelligence and transforms villages into centers of creativity and innovation.",
    "vision.cta": "Be Part of the Vision",

    // Contact Section
    "contact.title": "Ready to Join?",
    "contact.description": "Contact us today and start your journey in the world of artificial intelligence",
    "contact.cta": "Contact Us Now",

    // Footer
    "footer.about": "We empower children and youth to acquire AI skills in a practical and fun way, transforming villages into centers of digital production and innovation.",
    "footer.quickLinks": "Quick Links",
    "footer.contactUs": "Contact Us",
    "footer.copyright": "All rights reserved.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "ar";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
