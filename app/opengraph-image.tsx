import { ImageResponse } from "next/og";

export const alt = "MoonHouse — AI Back Office for General Contractors";
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
          background: "#fbf8f3",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "Georgia, serif",
          color: "#1a1a1a",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 6,
            background: "#c8501e",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <div
          style={{
            fontSize: 40,
            fontWeight: 800,
            letterSpacing: "0.02em",
            display: "flex",
          }}
        >
          MOON<span style={{ color: "#c8501e" }}>HOUSE</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Courier New, monospace",
              fontSize: 20,
              fontWeight: 700,
              color: "#c8501e",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            AI Back Office &mdash; Built for General Contractors
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            The GC who responds first wins 78% of jobs.
          </div>
        </div>
        <div
          style={{
            fontFamily: "Courier New, monospace",
            fontSize: 18,
            color: "#555",
            letterSpacing: "0.1em",
          }}
        >
          moonhouse.ai &middot; Los Angeles, CA
        </div>
      </div>
    ),
    { ...size }
  );
}
