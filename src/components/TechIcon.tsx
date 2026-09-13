import { getGlyph } from "@/lib/icons";

/**
 * Brand mark, or a typeset monogram where no brand icon exists.
 * Renders in the current text colour by default; the real brand colour is
 * exposed as --brand so the tile can fade into it on hover.
 */
export function TechIcon({ name, size = 22 }: { name: string; size?: number }) {
  const glyph = getGlyph(name);

  if (glyph.kind === "mono") {
    return (
      <span
        aria-hidden="true"
        className="grid place-items-center font-mono font-semibold tracking-tight"
        style={{ width: size, height: size, fontSize: size * 0.42 }}
      >
        {glyph.label}
      </span>
    );
  }

  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      style={
        {
          "--brand": glyph.brand,
          "--brand-dark": glyph.brandDark,
        } as React.CSSProperties
      }
    >
      <path d={glyph.path} />
    </svg>
  );
}
