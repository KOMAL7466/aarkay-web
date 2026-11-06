export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`mb-12 ${alignClass} max-w-3xl`}>
      {badge && (
        <span className={`inline-block ${dark ? "bg-gold/20 text-gold" : "bg-orange/10 text-orange"} font-semibold text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-4`}>
          {badge}
        </span>
      )}
      <h2 className={`font-sora font-extrabold text-3xl md:text-5xl leading-tight mb-4 ${dark ? "text-white" : "text-navy"} tracking-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}