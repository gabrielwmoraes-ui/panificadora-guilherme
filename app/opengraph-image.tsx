import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #2B1810 0%, #3D251A 60%, #A47148 100%)",
          color: "#F5EFE6",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#C8A35A" }}>
          <div style={{ width: 50, height: 1, background: "#C8A35A" }} />
          {site.tagline}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 24, fontSize: 130, lineHeight: 1, letterSpacing: -3 }}>
            <span>Meu</span>
            <span style={{ color: "#C8A35A", fontStyle: "italic" }}>Coffe</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 32,
              lineHeight: 1.3,
              maxWidth: 900,
              opacity: 0.85,
              fontFamily: "system-ui",
            }}
          >
            Padaria artesanal com fermentação natural, café especial e atendimento que lembra o seu nome.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, opacity: 0.85, fontFamily: "system-ui" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C8A35A" }} />
          {site.address.full}
        </div>
      </div>
    ),
    { ...size },
  );
}
