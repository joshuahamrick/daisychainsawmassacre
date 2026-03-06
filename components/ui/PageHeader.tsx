interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <div
        style={{
          fontSize: "0.65rem",
          letterSpacing: "4px",
          color: "#ff00cc",
          marginBottom: "0.6rem",
          fontFamily: "var(--font-courier), 'Courier New', monospace",
        }}
      >
        ✦ ─── ✦ ─── ✦
      </div>

      <h1
        style={{
          fontFamily: "var(--font-courier), 'Courier New', monospace",
          fontSize: "2.75rem",
          color: "#f5f0ff",
          letterSpacing: "4px",
          lineHeight: 1,
          textShadow: "3px 3px 0px #ff00cc, 6px 6px 0px rgba(255, 0, 204, 0.15)",
          marginBottom: "0.5rem",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          style={{
            fontSize: "0.75rem",
            color: "#8855aa",
            fontFamily: "var(--font-courier), 'Courier New', monospace",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          {subtitle}
        </p>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.75rem" }}>
        <div
          style={{
            height: "2px",
            width: "3rem",
            backgroundColor: "#ff00cc",
            boxShadow: "0 0 8px #ff00cc",
          }}
        />
        <span style={{ color: "#ff00cc", fontSize: "0.7rem" }}>✦</span>
        <div
          style={{
            height: "1px",
            width: "1.5rem",
            backgroundColor: "rgba(255, 0, 204, 0.35)",
          }}
        />
      </div>
    </div>
  );
}
