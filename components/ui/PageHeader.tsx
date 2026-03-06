interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h1
        style={{
          fontFamily: "var(--font-vt323), monospace",
          fontSize: "4.5rem",
          color: "#f5f0ff",
          lineHeight: 1,
          textShadow: "3px 3px 0px #ff00cc",
          marginBottom: "0.6rem",
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          style={{
            fontSize: "0.7rem",
            color: "#8855aa",
            fontFamily: "var(--font-courier), 'Courier New', monospace",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          {subtitle}
        </p>
      )}

      <div
        style={{
          height: "2px",
          width: "4rem",
          backgroundColor: "#ff00cc",
          boxShadow: "0 0 8px #ff00cc",
        }}
      />
    </div>
  );
}
