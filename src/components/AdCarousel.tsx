import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { ads } from "@/data/ads";

export function AdCarousel() {
  const [index, setIndex] = useState(0);
  const count = ads.length;

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + count) % count);
  }, [count]);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(t);
  }, [count]);

  return (
    <section className="bg-navy py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-gold/20 shadow-card">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(${index * 100}%)` }}
          >
            {ads.map((ad) => (
              <div key={ad.id} className="relative min-w-full">
                <img
                  src={ad.image}
                  alt={ad.title}
                  loading="lazy"
                  className="h-[320px] w-full object-cover md:h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-navy-deep/95 via-navy-deep/70 to-navy-deep/20" />
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-xl px-6 text-start md:px-12">
                    <span className="inline-block rounded-full border border-gold/40 bg-navy-deep/40 px-4 py-1 text-xs font-semibold text-gold">
                      {ad.badge}
                    </span>
                    <h3 className="mt-4 text-2xl font-extrabold leading-snug text-cream md:text-4xl">
                      {ad.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80 md:text-base">
                      {ad.text}
                    </p>
                    <Link
                      to={ad.to}
                      className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-bold text-navy shadow-gold transition-transform hover:-translate-y-0.5"
                    >
                      {ad.cta}
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="التالي"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-navy-deep/60 p-2 text-cream backdrop-blur transition-colors hover:bg-navy-deep"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(-1)}
            aria-label="السابق"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-navy-deep/60 p-2 text-cream backdrop-blur transition-colors hover:bg-navy-deep"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {ads.map((ad, i) => (
              <button
                key={ad.id}
                onClick={() => setIndex(i)}
                aria-label={`الإعلان ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-gold" : "w-2 bg-cream/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}