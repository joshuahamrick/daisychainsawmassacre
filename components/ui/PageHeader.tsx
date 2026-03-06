interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-10">
      <h1
        className="text-4xl md:text-5xl mb-3"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F0EDE8" }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="text-base" style={{ color: "#6B6B6B" }}>
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-px w-16" style={{ backgroundColor: "#C9A96E" }} />
    </div>
  );
}
