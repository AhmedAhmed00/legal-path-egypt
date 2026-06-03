import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as StarRating } from "./StarRating-D_DIxzYB.mjs";
import { l as ArrowLeft } from "../_libs/lucide-react.mjs";
function LawyerCard({ lawyer }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/lawyers/$lawyerId",
      params: { lawyerId: lawyer.id },
      className: "group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-navy-card/60 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: lawyer.image,
            alt: lawyer.name,
            loading: "lazy",
            width: 1024,
            height: 1024,
            className: "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-5 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-cream", children: lawyer.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gold", children: lawyer.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: lawyer.rating, size: 14 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-cream/60", children: [
              "(",
              lawyer.reviews,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 line-clamp-2 flex-1 text-xs leading-relaxed text-cream/65", children: lawyer.bio }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center justify-center gap-1 text-sm font-semibold text-gold", children: [
            "اعرف المزيد",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 transition-transform group-hover:-translate-x-1" })
          ] })
        ] })
      ]
    }
  );
}
export {
  LawyerCard as L
};
