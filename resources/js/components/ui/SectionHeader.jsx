export default function SectionHeader({ eyebrow, title, description, align = "left", action }) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`mb-12 md:mb-16 reveal-up max-w-3xl ${alignCls}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <div className={`flex flex-col gap-4 ${action ? "md:flex-row md:items-end md:justify-between" : ""}`}>
        <div>
          <h2 className="section-title">{title}</h2>
          {description && <p className="mt-4 text-muted leading-relaxed max-w-xl">{description}</p>}
        </div>
        {action}
      </div>
    </div>
  );
}
