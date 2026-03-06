import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "About — daisychainsawmassacre",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 1rem 3.5rem" }}>
      <PageHeader title="About" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Bio */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div
            style={{
              border: "1px solid #3d0060",
              backgroundColor: "#100018",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "#f5f0ff",
                fontFamily: "var(--font-courier), 'Courier New', monospace",
                marginBottom: "1.25rem",
              }}
            >
              daisychainsawmassacre is a visual artist working in oil, acrylic, and mixed
              media. Her practice explores texture, restraint, and the quiet tension between
              light and darkness — finding intimacy in the overlooked and strange beauty in
              decay.
            </p>

            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.8,
                color: "#a090c0",
                fontFamily: "var(--font-courier), 'Courier New', monospace",
                marginBottom: "1.25rem",
              }}
            >
              Drawing on sources as varied as Victorian still life, horror iconography, and
              domestic ritual, her work occupies a space between the ornate and the
              unsettling. Each piece is built slowly, layer by layer, resisting the quick
              and the obvious.
            </p>

            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.8,
                color: "#a090c0",
                fontFamily: "var(--font-courier), 'Courier New', monospace",
              }}
            >
              She accepts commissions for original works and is available for collaborative
              projects. Prints of selected works are available in the shop.
            </p>
          </div>

          {/* Education */}
          <div
            style={{
              border: "1px solid #3d0060",
              backgroundColor: "#100018",
              padding: "1.25rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-boogaloo), 'Arial Black', sans-serif",
                fontSize: "1.6rem",
                color: "#ff00cc",
                textShadow: "0 0 8px rgba(255, 0, 204, 0.4)",
                marginBottom: "0.75rem",
              }}
            >
              Education
            </h2>
            <div>
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  color: "#f5f0ff",
                  fontFamily: "var(--font-courier), 'Courier New', monospace",
                }}
              >
                Norwich School of Art (NSA)
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#8855aa",
                  fontFamily: "var(--font-courier), 'Courier New', monospace",
                }}
              >
                Fine Art
              </p>
            </div>
          </div>
        </div>

        {/* Secondary image */}
        <div className="hidden md:block">
          <div
            style={{
              width: "100%",
              aspectRatio: "3/4",
              border: "2px solid #3d0060",
              backgroundColor: "#180025",
              background: "linear-gradient(160deg, #1a0030 0%, #180025 100%)",
              display: "flex",
              alignItems: "flex-end",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#3d0060",
                fontFamily: "monospace",
              }}
            >
              Add secondary photo — /public/images/about/studio.jpg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
