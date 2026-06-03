import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { X, M as Menu, A as Apple, P as Play, T as Twitter, F as Facebook, L as Linkedin, I as Instagram } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-DBjb3_Ra.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function Logo({ variant = "light" }) {
  const textClass = variant === "light" ? "text-cream" : "text-navy";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col leading-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xl font-extrabold ${textClass}`, children: "محاميك" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium tracking-wide text-gold", children: "MUHAMIK · LEGAL" })
  ] }) });
}
const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/lawyers", label: "المحامون" },
  { to: "/cases", label: "سوق القضايا" },
  { to: "/templates", label: "النماذج القانونية" },
  { to: "/ai", label: "المساعد الذكي" }
];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 border-b border-white/10 bg-navy-deep/95 backdrop-blur", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-7 lg:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          className: "text-sm font-medium text-cream/80 transition-colors hover:text-gold",
          activeProps: { className: "text-gold" },
          activeOptions: { exact: l.to === "/" },
          children: l.label
        },
        l.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-2 lg:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/register",
            className: "rounded-md border border-gold/50 px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-white/5",
            children: "انضم كمحامٍ"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/lawyers",
            className: "rounded-md bg-gradient-gold px-4 py-2 text-sm font-bold text-navy shadow-gold transition-transform hover:-translate-y-0.5",
            children: "احجز استشارة"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen((v) => !v),
          className: "text-cream lg:hidden",
          "aria-label": "القائمة",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {})
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 bg-navy-deep px-4 py-4 lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-1", children: [
      links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          onClick: () => setOpen(false),
          className: "rounded-md px-3 py-2.5 text-sm font-medium text-cream/85 hover:bg-white/5",
          activeProps: { className: "text-gold" },
          activeOptions: { exact: l.to === "/" },
          children: l.label
        },
        l.to
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/register",
            onClick: () => setOpen(false),
            className: "flex-1 rounded-md border border-gold/50 px-4 py-2 text-center text-sm font-semibold text-cream",
            children: "انضم كمحامٍ"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/lawyers",
            onClick: () => setOpen(false),
            className: "flex-1 rounded-md bg-gradient-gold px-4 py-2 text-center text-sm font-bold text-navy",
            children: "احجز استشارة"
          }
        )
      ] })
    ] }) })
  ] });
}
const columns = [
  {
    title: "المنصة",
    links: [
      { label: "عن محاميك", to: "/" },
      { label: "المحامون", to: "/lawyers" },
      { label: "سوق القضايا", to: "/cases" },
      { label: "النماذج القانونية", to: "/templates" }
    ]
  },
  {
    title: "الخدمات",
    links: [
      { label: "المساعد الذكي", to: "/ai" },
      { label: "حجز استشارة", to: "/lawyers" },
      { label: "انضم كمحامٍ", to: "/register" },
      { label: "الباقات", to: "/register" }
    ]
  }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-navy-deep text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-14 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-sm leading-relaxed text-cream/65", children: "منصة متخصصة في الاستشارات القانونية تقدم خدمات شخصية وتجارية بأمان واحترافية لتلبية احتياجاتك في مصر والشرق الأوسط." })
      ] }),
      columns.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-sm font-bold text-gold", children: col.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: col.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "text-sm text-cream/70 transition-colors hover:text-gold", children: l.label }) }, l.label)) })
      ] }, col.title)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-sm font-bold text-gold", children: "حمّل تطبيقنا" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "flex items-center gap-3 rounded-lg border border-white/15 px-4 py-2.5 transition-colors hover:border-gold/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Apple, { className: "h-6 w-6 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-cream/60", children: "حمّله من" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "App Store" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "flex items-center gap-3 rounded-lg border border-white/15 px-4 py-2.5 transition-colors hover:border-gold/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-6 w-6 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-cream/60", children: "احصل عليه من" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "Google Play" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 border-t border-white/10 pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-center text-sm text-cream/60", children: "تابعنا عبر مواقع التواصل الاجتماعي" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-3", children: [Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#",
          className: "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-gradient-gold hover:text-navy",
          "aria-label": "social",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-xs text-cream/45", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " محاميك. جميع الحقوق محفوظة."
      ] })
    ] })
  ] }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "محاميك | منصة قانونية رقمية" },
      {
        name: "description",
        content: "محاميك منصة قانونية رقمية تربط العملاء بأفضل المحامين في مصر والشرق الأوسط: استشارات، حجز، سوق قضايا ونماذج قانونية."
      },
      { name: "author", content: "محاميك" },
      { property: "og:title", content: "محاميك | منصة قانونية رقمية" },
      {
        property: "og:description",
        content: "تواصل مع أفضل المحامين واحجز استشارتك القانونية بسهولة وأمان."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "محاميك | منصة قانونية رقمية" },
      { name: "description", content: "Lovable Generated Project" },
      { property: "og:description", content: "Lovable Generated Project" },
      { name: "twitter:description", content: "Lovable Generated Project" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2dbd3b59-ba93-40a5-80bb-47f522629f58/id-preview-84f067bf--01454a72-c1b8-433d-b96b-ea7652cb2695.lovable.app-1780462855868.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2dbd3b59-ba93-40a5-80bb-47f522629f58/id-preview-84f067bf--01454a72-c1b8-433d-b96b-ea7652cb2695.lovable.app-1780462855868.png" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&family=Cairo:wght@400;600;700;800&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "ar", dir: "rtl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col bg-navy", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./templates-WNfA-LRp.mjs");
const Route$7 = createFileRoute("/templates")({
  head: () => ({
    meta: [{
      title: "النماذج القانونية | محاميك"
    }, {
      name: "description",
      content: "نماذج وعقود قانونية جاهزة للبيع: عقود إيجار وعمل واتفاقيات وتوكيلات وصحف دعاوى."
    }, {
      property: "og:title",
      content: "النماذج القانونية | محاميك"
    }, {
      property: "og:description",
      content: "نماذج وعقود قانونية جاهزة للتحميل والتعديل."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const lawyer1 = "/assets/lawyer-1-DIQDI1lc.jpg";
const lawyer2 = "/assets/lawyer-2-B_ne_iQy.jpg";
const lawyer3 = "/assets/lawyer-3-CL_RGwQC.jpg";
const lawyer4 = "/assets/lawyer-4-DKuNemhU.jpg";
const sampleReviews = [
  { id: "r1", author: "أحمد سمير", rating: 5, date: "منذ أسبوع", text: "تعامل راقٍ واحترافية عالية، تابع قضيتي خطوة بخطوة وحصلت على نتيجة ممتازة. أنصح به بشدة." },
  { id: "r2", author: "منى عبد الله", rating: 5, date: "منذ شهر", text: "استشارة واضحة ودقيقة وفّرت عليّ وقتاً ومجهوداً كبيراً. شرح لي كل التفاصيل القانونية ببساطة." },
  { id: "r3", author: "كريم حسن", rating: 4, date: "منذ شهرين", text: "محامٍ متمكن ورده سريع على الاستفسارات، تجربة موفّقة بشكل عام." }
];
const specialties = [
  "كل التخصصات",
  "قانون الأسرة",
  "القانون التجاري",
  "قانون العقارات",
  "قانون العمل",
  "القانون الجنائي",
  "الملكية الفكرية",
  "قانون الشركات"
];
const cities = ["كل المدن", "القاهرة", "الإسكندرية", "دبي", "الرياض", "جدة", "عمّان"];
const baseBio = "محامٍ ومستشار قانوني يتمتع بخبرة واسعة في تقديم الاستشارات والترافع أمام المحاكم. يحرص على حماية حقوق موكليه ومتابعة قضاياهم بدقة واحترافية، مع تقديم حلول قانونية واضحة وسريعة تناسب احتياجات كل عميل.";
const lawyers = [
  {
    id: "murtada-mansour",
    name: "المستشار / مرتضى منصور",
    title: "محامي الأسرة",
    specialty: "قانون الأسرة",
    image: lawyer1,
    rating: 5,
    reviews: 128,
    consultations: 940,
    price: 2e3,
    city: "القاهرة",
    experience: 18,
    phone: "+20 122 158 2585",
    email: "mansour@muhamik.com",
    bio: baseBio
  },
  {
    id: "mohamed-elnabawy",
    name: "محمد النبوي",
    title: "مستشار قانوني للأعمال",
    specialty: "القانون التجاري",
    image: lawyer2,
    rating: 4.9,
    reviews: 96,
    consultations: 812,
    price: 1500,
    city: "دبي",
    experience: 12,
    phone: "+971 50 245 1180",
    email: "elnabawy@muhamik.com",
    bio: baseBio
  },
  {
    id: "fahd-elwaled",
    name: "فهد الوالد",
    title: "محامي حقوق إنسان",
    specialty: "القانون الجنائي",
    image: lawyer4,
    rating: 4.8,
    reviews: 87,
    consultations: 760,
    price: 1800,
    city: "الرياض",
    experience: 22,
    phone: "+966 55 410 2233",
    email: "fahd@muhamik.com",
    bio: baseBio
  },
  {
    id: "salma-fawzy",
    name: "سلمى فوزي",
    title: "مستشارة قانونية في حقوق المرأة",
    specialty: "قانون الأسرة",
    image: lawyer3,
    rating: 5,
    reviews: 142,
    consultations: 1020,
    price: 1700,
    city: "الإسكندرية",
    experience: 10,
    phone: "+20 100 778 9012",
    email: "salma@muhamik.com",
    bio: baseBio
  },
  {
    id: "fares-awad",
    name: "فارس عوض",
    title: "مستشار قانوني تجاري",
    specialty: "قانون الشركات",
    image: lawyer2,
    rating: 4.7,
    reviews: 64,
    consultations: 540,
    price: 1300,
    city: "جدة",
    experience: 9,
    phone: "+966 56 882 4471",
    email: "fares@muhamik.com",
    bio: baseBio
  },
  {
    id: "khaled-elsayed",
    name: "خالد السيد",
    title: "مستشار قانون عقاري",
    specialty: "قانون العقارات",
    image: lawyer1,
    rating: 4.9,
    reviews: 110,
    consultations: 690,
    price: 1600,
    city: "القاهرة",
    experience: 15,
    phone: "+20 111 334 5566",
    email: "khaled@muhamik.com",
    bio: baseBio
  },
  {
    id: "hossam-tarek",
    name: "حسام طارق",
    title: "مستشار الملكية الفكرية",
    specialty: "الملكية الفكرية",
    image: lawyer4,
    rating: 4.6,
    reviews: 52,
    consultations: 430,
    price: 1400,
    city: "عمّان",
    experience: 11,
    phone: "+962 79 220 1144",
    email: "hossam@muhamik.com",
    bio: baseBio
  },
  {
    id: "nourhan-adel",
    name: "نورهان عادل",
    title: "مستشارة قانون العمل",
    specialty: "قانون العمل",
    image: lawyer3,
    rating: 4.8,
    reviews: 73,
    consultations: 588,
    price: 1200,
    city: "دبي",
    experience: 8,
    phone: "+971 52 661 0099",
    email: "nourhan@muhamik.com",
    bio: baseBio
  },
  {
    id: "mahmoud-ibrahim",
    name: "محمود إبراهيم",
    title: "مستشار قانوني للأعمال",
    specialty: "القانون التجاري",
    image: lawyer1,
    rating: 4.7,
    reviews: 81,
    consultations: 612,
    price: 1550,
    city: "الرياض",
    experience: 14,
    phone: "+966 53 117 2200",
    email: "mahmoud@muhamik.com",
    bio: baseBio
  }
];
function getLawyer(id) {
  return lawyers.find((l) => l.id === id);
}
const topRated = [...lawyers].sort((a, b) => b.rating - a.rating || b.reviews - a.reviews).slice(0, 6);
const mostConsulted = [...lawyers].sort((a, b) => b.consultations - a.consultations).slice(0, 6);
const BASE_URL = "";
const Route$6 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = ["/", "/lawyers", "/cases", "/templates", "/ai", "/register", ...lawyers.map((l) => `/lawyers/${l.id}`)];
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`);
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      }
    }
  }
});
const $$splitComponentImporter$5 = () => import("./register-D7yXZ3AG.mjs");
const Route$5 = createFileRoute("/register")({
  head: () => ({
    meta: [{
      title: "انضم كمحامٍ | محاميك"
    }, {
      name: "description",
      content: "سجّل كمحامٍ على منصة محاميك، اختر باقتك وارفع بياناتك وصورتك وسيرتك الذاتية."
    }, {
      property: "og:title",
      content: "انضم كمحامٍ | محاميك"
    }, {
      property: "og:description",
      content: "اختر باقتك وابدأ استقبال العملاء على منصة محاميك."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./cases-Dcf4CCVd.mjs");
const Route$4 = createFileRoute("/cases")({
  head: () => ({
    meta: [{
      title: "سوق القضايا | محاميك"
    }, {
      name: "description",
      content: "اطرح قضيتك واستقبل عروضاً من المحامين، أو تصفح القضايا المتاحة على سوق القضايا."
    }, {
      property: "og:title",
      content: "سوق القضايا | محاميك"
    }, {
      property: "og:description",
      content: "اطرح قضيتك واستقبل عروضاً من أفضل المحامين."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./ai-egvcPJkC.mjs");
const Route$3 = createFileRoute("/ai")({
  head: () => ({
    meta: [{
      title: "المساعد القانوني الذكي | محاميك"
    }, {
      name: "description",
      content: "اطرح سؤالك القانوني واحصل على إجابة فورية من المساعد القانوني الذكي."
    }, {
      property: "og:title",
      content: "المساعد القانوني الذكي | محاميك"
    }, {
      property: "og:description",
      content: "إجابات قانونية فورية على مدار الساعة."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-DK6yuhTU.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "محاميك | منصة قانونية رقمية في مصر والشرق الأوسط"
    }, {
      name: "description",
      content: "تواصل مع أفضل المحامين، احجز استشارة قانونية، تصفح سوق القضايا والنماذج القانونية على منصة محاميك."
    }, {
      property: "og:title",
      content: "محاميك | منصة قانونية رقمية"
    }, {
      property: "og:description",
      content: "العلاقة بين القانون والتكنولوجيا — استشارات قانونية موثوقة بسهولة وأمان."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./lawyers.index-VPll4mSl.mjs");
const Route$1 = createFileRoute("/lawyers/")({
  head: () => ({
    meta: [{
      title: "المحامون | محاميك"
    }, {
      name: "description",
      content: "تصفح قائمة المحامين والمستشارين القانونيين، ابحث وفلتر حسب التخصص والمدينة."
    }, {
      property: "og:title",
      content: "المحامون | محاميك"
    }, {
      property: "og:description",
      content: "ابحث عن المحامي المناسب حسب التخصص والتقييم والمدينة."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./lawyers._lawyerId-DwYtNxqy.mjs");
const $$splitErrorComponentImporter = () => import("./lawyers._lawyerId-DxWTWPen.mjs");
const $$splitNotFoundComponentImporter = () => import("./lawyers._lawyerId-DL_nHFHt.mjs");
const Route = createFileRoute("/lawyers/$lawyerId")({
  head: ({
    params
  }) => {
    const l = getLawyer(params.lawyerId);
    return {
      meta: [{
        title: l ? `${l.name} | محاميك` : "محامٍ | محاميك"
      }, {
        name: "description",
        content: l ? `${l.title} — ${l.bio.slice(0, 120)}` : "ملف المحامي"
      }]
    };
  },
  loader: ({
    params
  }) => {
    const lawyer = getLawyer(params.lawyerId);
    if (!lawyer) throw notFound();
    return {
      lawyer
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TemplatesRoute = Route$7.update({
  id: "/templates",
  path: "/templates",
  getParentRoute: () => Route$8
});
const SitemapDotxmlRoute = Route$6.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$8
});
const RegisterRoute = Route$5.update({
  id: "/register",
  path: "/register",
  getParentRoute: () => Route$8
});
const CasesRoute = Route$4.update({
  id: "/cases",
  path: "/cases",
  getParentRoute: () => Route$8
});
const AiRoute = Route$3.update({
  id: "/ai",
  path: "/ai",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const LawyersIndexRoute = Route$1.update({
  id: "/lawyers/",
  path: "/lawyers/",
  getParentRoute: () => Route$8
});
const LawyersLawyerIdRoute = Route.update({
  id: "/lawyers/$lawyerId",
  path: "/lawyers/$lawyerId",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AiRoute,
  CasesRoute,
  RegisterRoute,
  SitemapDotxmlRoute,
  TemplatesRoute,
  LawyersLawyerIdRoute,
  LawyersIndexRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  sampleReviews as a,
  cities as c,
  lawyers as l,
  mostConsulted as m,
  router as r,
  specialties as s,
  topRated as t
};
