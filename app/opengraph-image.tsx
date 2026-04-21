import { ImageResponse } from "next/og";

export const alt =
  "MoonHouse — AI agents for operators who run real businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 20% 10%, rgba(107,142,255,0.28), transparent 60%), radial-gradient(ellipse 60% 45% at 85% 0%, rgba(201,163,255,0.22), transparent 60%), #0a0e1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "Georgia, serif",
          color: "#f5f7fa",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          <span>MoonHouse</span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              letterSpacing: "0.18em",
              color: "#8b9bb4",
              textTransform: "uppercase",
            }}
          >
            AI agents for operators
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 80,
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            Agents for every industry.
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              background:
                "linear-gradient(135deg, #6b8eff 0%, #c9a3ff 60%, #ffb67a 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            Built by operators.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 16,
            letterSpacing: "0.14em",
            color: "#5a6b85",
            textTransform: "uppercase",
          }}
        >
          <span>20 verticals · 160 agents · Live in weeks</span>
          <span>moonhouse.ai</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
