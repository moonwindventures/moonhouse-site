import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          fontWeight: 600,
          background:
            "linear-gradient(135deg, #0a0e1a 0%, #141b2d 100%)",
          color: "#c9a3ff",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.02em",
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
