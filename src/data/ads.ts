import type { AdSlide } from "./content";
import gavelBanner from "@/assets/gavel-banner.jpg";
import justiceStatue from "@/assets/justice-statue.jpg";
import booksGavel from "@/assets/books-gavel.jpg";
import library from "@/assets/library.jpg";

export const ads: AdSlide[] = [
  {
    id: "ad-discount",
    badge: "عرض خاص لفترة محدودة",
    title: "خصم 50% على أول استشارة قانونية",
    text: "ابدأ رحلتك القانونية مع نخبة المحامين والمستشارين واحصل على أول استشارة بنصف السعر.",
    cta: "احجز استشارتك الآن",
    to: "/lawyers",
    image: gavelBanner,
  },
  {
    id: "ad-cases",
    badge: "سوق القضايا",
    title: "انشر قضيتك واستقبل عروضاً تنافسية",
    text: "اطرح تفاصيل قضيتك مجاناً واختر العرض الأنسب لك من بين عشرات المحامين المتخصصين.",
    cta: "انشر قضيتك",
    to: "/cases",
    image: justiceStatue,
  },
  {
    id: "ad-templates",
    badge: "النماذج القانونية",
    title: "عقود ونماذج جاهزة بصياغة احترافية",
    text: "حمّل عقودك ونماذجك القانونية فوراً، أو اطلب نموذجاً مخصصاً يصممه لك محامٍ متخصص.",
    cta: "تصفح النماذج",
    to: "/templates",
    image: booksGavel,
  },
  {
    id: "ad-ai",
    badge: "المساعد القانوني الذكي",
    title: "إجابات قانونية فورية على مدار الساعة",
    text: "احصل على توجيه قانوني أولي سريع في أي وقت قبل التواصل مع المحامي المناسب.",
    cta: "جرّب المساعد",
    to: "/ai",
    image: library,
  },
];