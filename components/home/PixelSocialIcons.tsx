// Pixel art social icons — designed to match actual platform marks, 3px per dot

const PX = 3;

function PixelArt({ grid, color }: { grid: number[][]; color: string }) {
  const h = grid.length;
  const w = grid[0].length;
  return (
    <svg
      width={w * PX}
      height={h * PX}
      viewBox={`0 0 ${w * PX} ${h * PX}`}
      style={{ imageRendering: "pixelated", display: "block" }}
      aria-hidden="true"
    >
      {grid.flatMap((row, y) =>
        row.map((cell, x) =>
          cell ? (
            <rect key={`${x}-${y}`} x={x * PX} y={y * PX} width={PX} height={PX} fill={color} />
          ) : null
        )
      )}
    </svg>
  );
}

// Instagram — 9×9 camera body + 5-wide lens ring + center aperture dot + flash dot top-right
// 27×27px — compact camera silhouette, lens is clearly a circle not a full-frame square
const INSTAGRAM = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1], // top border
  [1, 0, 0, 0, 0, 0, 0, 0, 1], // body inside
  [1, 0, 0, 0, 0, 0, 1, 0, 1], // flash dot at col 6 (top-right)
  [1, 0, 0, 1, 1, 1, 0, 0, 1], // lens top arc (cols 3–5)
  [1, 0, 1, 0, 0, 0, 1, 0, 1], // lens sides (cols 2 & 6)
  [1, 0, 1, 0, 1, 0, 1, 0, 1], // lens sides + center aperture dot
  [1, 0, 0, 1, 1, 1, 0, 0, 1], // lens bottom arc
  [1, 0, 0, 0, 0, 0, 0, 0, 1], // body inside
  [1, 1, 1, 1, 1, 1, 1, 1, 1], // bottom border
];

// TikTok — 10×11 eighth music note: filled oval head bottom-left, tall stem col 5, flag curling right at top
// 30×33px — the "d" note silhouette that IS the TikTok logo
const TIKTOK = [
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 0], // flag band (cols 5–7)
  [0, 0, 0, 0, 0, 1, 0, 1, 1, 0], // stem + flag curls right
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0], // flag continues
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // stem
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // stem
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // stem
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // stem
  [0, 0, 1, 1, 1, 1, 0, 0, 0, 0], // note head connects to stem (cols 2–5)
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0], // note head (cols 1–4)
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0], // note head widest (cols 0–3)
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], // note head bottom oval
];

// Bluesky — 11×9 butterfly silhouette (the actual Bluesky brand mark)
// 11 cols (33px) gives each wing 5px at widest — enough for a real oval taper.
// Upper wing profile per side: 2→4→5→3→1 = oval, not a rectangle.
// Body at col 5 runs for 5 rows so it reads as a clear vertical spine, not a knot.
const BLUESKY = [
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0], // upper wing tips (2px each)
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0], // wings grow (4px each, body gap)
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1], // wings widest (5px each, body gap)
  [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0], // wings taper (3px) + body appears
  [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], // wings narrow (1px) + body
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // body waist only
  [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], // lower wings start + body
  [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0], // lower wings spread (3px each)
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0], // lower wing tips
];

// Etsy — 9×9 shopping bag with centered arch handle
const ETSY = [
  [0, 0, 0, 1, 1, 1, 0, 0, 0], // handle arch
  [0, 0, 1, 0, 0, 0, 1, 0, 0], // handle sides
  [1, 1, 1, 1, 1, 1, 1, 1, 1], // bag top
  [1, 0, 0, 0, 0, 0, 0, 0, 1], // bag body
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1], // bag bottom
];

// Mail — 9×7 envelope with V-fold flap
// 27×21px — smaller and cleaner than before
const MAIL = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1], // top border
  [1, 1, 0, 0, 0, 0, 0, 1, 1], // flap opens
  [1, 0, 1, 0, 0, 0, 1, 0, 1], // V diagonal
  [1, 0, 0, 1, 0, 1, 0, 0, 1], // V narrows
  [1, 0, 0, 0, 1, 0, 0, 0, 1], // V point
  [1, 0, 0, 0, 0, 0, 0, 0, 1], // body
  [1, 1, 1, 1, 1, 1, 1, 1, 1], // bottom border
];

export function InstagramPixel({ color }: { color: string }) {
  return <PixelArt grid={INSTAGRAM} color={color} />;
}
export function TiktokPixel({ color }: { color: string }) {
  return <PixelArt grid={TIKTOK} color={color} />;
}
export function BlueskyPixel({ color }: { color: string }) {
  return <PixelArt grid={BLUESKY} color={color} />;
}
export function EtsyPixel({ color }: { color: string }) {
  return <PixelArt grid={ETSY} color={color} />;
}
export function MailPixel({ color }: { color: string }) {
  return <PixelArt grid={MAIL} color={color} />;
}
