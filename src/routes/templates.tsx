import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { templates } from "@/data/content";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title: "النماذج القانونية | محاميك" },
      { name: "description", content: "نماذج وعقود قانونية جاهزة للبيع: عقود إيجار وعمل واتفاقيات وتوكيلات وصحف دعاوى." },
      { property: "og:title", content: "النماذج القانونية | محاميك" },
      { property: "og:description", content: "نماذج وعقود قانونية جاهزة للتحميل والتعديل." },
    ],
  }),
  component: TemplatesPage,
});

function TemplatesPage() {
  return (
    <div className="bg-navy">
      <section className="bg-gradient-navy">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center md:px-8">
          <SectionHeading light title="النماذج القانونية" subtitle="عقود ونماذج قانونية جاهزة، مصاغة بدقة من متخصصين، جاهزة للتحميل والتعديل بأسعار مناسبة." />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {templates.map((t) => (
            <div key={t.id} className="flex flex-col rounded-xl border border-white/10 bg-navy-card/60 p-6 transition-all hover:-translate-y-1 hover:border-gold/40">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-gold">
                <FileText className="h-6 w-6 text-navy" />
              </span>
              <span className="mt-4 text-xs text-gold">{t.category} · {t.pages} صفحات</span>
              <h3 className="mt-1 text-base font-bold text-cream">{t.title}</h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-cream/65">{t.description}</p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-lg font-extrabold text-gold">{t.price} ج.م</span>
                <button className="inline-flex items-center gap-1.5 rounded-md bg-gradient-gold px-4 py-2 text-sm font-bold text-navy transition-transform hover:-translate-y-0.5">
                  <Download className="h-4 w-4" />
                  شراء
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}