import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "About — daisychainsawmassacre",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <PageHeader title="About" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Bio */}
        <div className="flex flex-col gap-6">
          <div
            className="prose max-w-none"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            <p
              className="text-lg leading-relaxed mb-5"
              style={{ color: "#F0EDE8" }}
            >
              {/* Replace this placeholder bio with the artist statement */}
              daisychainsawmassacre is a visual artist working in oil, acrylic, and mixed
              media. Her practice explores texture, restraint, and the quiet tension between
              light and darkness — finding intimacy in the overlooked and strange beauty in
              decay.
            </p>

            <p className="text-base leading-relaxed mb-5" style={{ color: "#aaa9a5" }}>
              Drawing on sources as varied as Victorian still life, horror iconography, and
              domestic ritual, her work occupies a space between the ornate and the
              unsettling. Each piece is built slowly, layer by layer, resisting the quick
              and the obvious.
            </p>

            <p className="text-base leading-relaxed" style={{ color: "#aaa9a5" }}>
              She accepts commissions for original works and is available for collaborative
              projects. Prints of selected works are available in the shop.
            </p>
          </div>

          {/* Education */}
          <div className="pt-6 border-t" style={{ borderColor: "#2a2a2a" }}>
            <h2
              className="text-xl mb-4"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "#C9A96E",
              }}
            >
              Education
            </h2>
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-base font-medium" style={{ color: "#F0EDE8" }}>
                  Norwich School of Art (NSA)
                </p>
                <p className="text-sm" style={{ color: "#6B6B6B" }}>
                  Fine Art — {/* Add years here, e.g. 2018–2022 */}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Optional secondary image */}
        <div className="hidden md:block">
          <div
            className="w-full aspect-[3/4] rounded-sm"
            style={{
              backgroundColor: "#1A1A1A",
              background: "linear-gradient(160deg, #1f1a14 0%, #1A1A1A 100%)",
            }}
          >
            {/* Add a second photo here by replacing this div with <Image> */}
            <div className="h-full flex items-end p-6">
              <p className="text-xs tracking-widest uppercase" style={{ color: "#2a2a2a" }}>
                Add secondary photo — /public/images/about/studio.jpg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
