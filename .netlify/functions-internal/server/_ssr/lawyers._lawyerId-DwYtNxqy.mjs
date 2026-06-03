import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as StarRating } from "./StarRating-D_DIxzYB.mjs";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-U2-3YMO2.mjs";
import { R as Route, a as sampleReviews } from "./router-Couc6-oM.mjs";
import { e as MapPin, p as Briefcase, C as CircleCheck, c as CreditCard, q as Star } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const times = ["10:00 ص", "12:00 م", "02:00 م", "04:00 م", "06:00 م", "08:00 م"];
const field = "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold";
function BookingDialog({ lawyer }) {
  const [open, setOpen] = reactExports.useState(false);
  const [done, setDone] = reactExports.useState(false);
  const [date, setDate] = reactExports.useState("");
  const [time, setTime] = reactExports.useState("");
  const [card, setCard] = reactExports.useState("");
  const [exp, setExp] = reactExports.useState("");
  const [cvv, setCvv] = reactExports.useState("");
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const valid = !!date && !!time && card.replace(/\s/g, "").length >= 12 && exp.length >= 4 && cvv.length >= 3;
  const reset = () => {
    setDone(false);
    setDate("");
    setTime("");
    setCard("");
    setExp("");
    setCvv("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Dialog,
    {
      open,
      onOpenChange: (v) => {
        setOpen(v);
        if (!v) reset();
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-5 w-full rounded-lg bg-navy py-3 text-sm font-bold text-cream transition-colors hover:bg-navy-deep", children: "احجز وادفع الآن" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[90vh] overflow-y-auto sm:max-w-md", dir: "rtl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "text-start text-navy", children: [
            "حجز استشارة مع ",
            lawyer.name
          ] }) }),
          done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mx-auto h-14 w-14 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 text-lg font-bold text-navy", children: "تم تأكيد حجز استشارتك بنجاح" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: [
              "استشارتك مع ",
              lawyer.name,
              " يوم ",
              date,
              " الساعة ",
              time,
              ". سيصلك تأكيد بموعد الجلسة قريباً."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setOpen(false);
              reset();
            }, className: "mt-5 rounded-lg bg-navy px-6 py-2.5 text-sm font-bold text-cream", children: "تم" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
            e.preventDefault();
            if (valid) setDone(true);
          }, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-semibold text-navy", children: "اختر اليوم" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", min: today, value: date, onChange: (e) => setDate(e.target.value), className: field })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-semibold text-navy", children: "اختر الموعد" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: times.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setTime(t),
                  className: `rounded-lg border px-2 py-2 text-xs font-semibold transition-colors ${time === t ? "border-gold bg-secondary text-navy" : "border-border text-muted-foreground"}`,
                  children: t
                },
                t
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg bg-secondary p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-extrabold text-navy", children: [
                lawyer.price,
                " ج.م"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "قيمة الاستشارة" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mb-2 flex items-center gap-2 text-sm font-semibold text-navy", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-4 w-4 text-gold" }),
                "رقم البطاقة"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: card, onChange: (e) => setCard(e.target.value), className: field, placeholder: "0000 0000 0000 0000", inputMode: "numeric" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-semibold text-navy", children: "تاريخ الانتهاء" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: exp, onChange: (e) => setExp(e.target.value), className: field, placeholder: "MM/YY" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-semibold text-navy", children: "CVV" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: cvv, onChange: (e) => setCvv(e.target.value), className: field, placeholder: "123", inputMode: "numeric" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: !valid, className: "w-full rounded-lg bg-gradient-gold py-3 text-sm font-bold text-navy shadow-gold disabled:opacity-50", children: [
              "ادفع ",
              lawyer.price,
              " ج.م"
            ] })
          ] })
        ] })
      ]
    }
  );
}
function ReviewsSection({ lawyerName }) {
  const [reviews, setReviews] = reactExports.useState(sampleReviews);
  const [author, setAuthor] = reactExports.useState("");
  const [text, setText] = reactExports.useState("");
  const [rating, setRating] = reactExports.useState(5);
  const [hover, setHover] = reactExports.useState(0);
  const submit = (e) => {
    e.preventDefault();
    if (author.trim().length < 2 || text.trim().length < 3) return;
    setReviews((r) => [
      { id: `n-${Date.now()}`, author: author.trim(), text: text.trim(), rating, date: "الآن" },
      ...r
    ]);
    setAuthor("");
    setText("");
    setRating(5);
  };
  const avg = reviews.reduce((a, b) => a + b.rating, 0) / reviews.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-2xl border border-border bg-card p-7 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-navy", children: avg.toFixed(1) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: avg }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
          "(",
          reviews.length,
          " تقييم)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-navy", children: "التعليقات والتقييمات" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-6 rounded-xl border border-border bg-secondary/50 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-bold text-navy", children: [
        "أضف تقييمك عن ",
        lawyerName
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-row-reverse items-center justify-end gap-1", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onMouseEnter: () => setHover(i),
          onMouseLeave: () => setHover(0),
          onClick: () => setRating(i),
          "aria-label": `تقييم ${i}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-6 w-6 ${i <= (hover || rating) ? "fill-gold text-gold" : "fill-muted text-muted"}` })
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: author,
          onChange: (e) => setAuthor(e.target.value),
          placeholder: "اسمك",
          maxLength: 60,
          className: "mt-3 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-gold"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: text,
          onChange: (e) => setText(e.target.value),
          placeholder: "اكتب تجربتك مع المحامي...",
          rows: 3,
          maxLength: 500,
          className: "mt-3 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-gold"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "mt-3 rounded-lg bg-gradient-gold px-6 py-2.5 text-sm font-bold text-navy shadow-gold transition-transform hover:-translate-y-0.5",
          children: "نشر التقييم"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-4", children: reviews.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: r.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: r.rating, size: 14 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-navy", children: r.author }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-sm font-bold text-navy", children: r.author.charAt(0) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: r.text })
    ] }, r.id)) })
  ] });
}
function LawyerProfile() {
  const {
    lawyer
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 py-12 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "border-b-2 border-gold pb-3 text-2xl font-extrabold text-navy md:text-3xl", children: lawyer.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lawyer.image, alt: lawyer.name, width: 1024, height: 1024, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "حسب حالة المحامي" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-navy", children: lawyer.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-extrabold text-navy", children: [
            "$",
            lawyer.price
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "سعر الاستشارة" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-navy", children: lawyer.rating.toFixed(1) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: lawyer.rating })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
            "التقييم (",
            lawyer.reviews,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookingDialog, { lawyer }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center justify-between text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-gold" }),
              lawyer.city
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "المدينة" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center justify-between text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4 text-gold" }),
              lawyer.experience,
              " سنة"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "سنوات الخبرة" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 rounded-2xl border border-border bg-card p-7 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-navy", children: "السيرة الذاتية" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-loose text-muted-foreground", children: lawyer.bio }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm leading-loose text-muted-foreground", children: [
        "يتمتع ",
        lawyer.name,
        " بسجل حافل بالنجاح في تأمين نتائج إيجابية وتسويات عادلة لعملائه، مع التزام كامل بالسرية والاحترافية في كل قضية."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-6 text-lg font-bold text-navy", children: "مجال الممارسة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: lawyer.specialty }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-6 text-lg font-bold text-navy", children: "الخبرة المهنية" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "محامٍ ومستشار قانوني معتمد لدى نقابة المحامين" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "خبرة ",
          lawyer.experience,
          " عاماً في الترافع والاستشارات"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "الترافع أمام المحاكم بمختلف درجاتها" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewsSection, { lawyerName: lawyer.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/lawyers", className: "text-sm font-semibold text-navy underline", children: "العودة لقائمة المحامين" }) })
  ] }) });
}
export {
  LawyerProfile as component
};
