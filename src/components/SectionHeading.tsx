export function SectionHeading({
  title,
  subtitle,
  light = false,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "start";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-start"}>
      <h2 className={`text-2xl font-extrabold md:text-3xl ${light ? "text-gold" : "text-gradient-gold"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base ${light ? "text-cream/70" : "text-muted-foreground"} ${align === "center" ? "" : "mx-0"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}