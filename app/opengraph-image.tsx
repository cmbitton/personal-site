import { ImageResponse } from "next/og";
import { siteName } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#f7efe0",
          background:
            "linear-gradient(135deg, #070806 0%, #11140f 54%, #171b14 100%)",
          fontFamily: "Inter, Arial, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 30,
            color: "#4fd3b6"
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(79, 211, 182, 0.55)",
              borderRadius: 8,
              background: "rgba(79, 211, 182, 0.12)",
              fontWeight: 800
            }}
          >
            CB
          </div>
          <div>{siteName}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              maxWidth: 900,
              fontSize: 76,
              lineHeight: 0.96,
              fontWeight: 800,
              letterSpacing: 0
            }}
          >
            Fast, modern websites for small businesses.
          </div>
          <div
            style={{
              maxWidth: 780,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#bbb19d"
            }}
          >
            Custom-coded sites built to look professional, load fast, and turn
            visitors into calls, bookings, and leads.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            fontSize: 24,
            color: "#d5aa5f"
          }}
        >
          <div>Design</div>
          <div>Development</div>
          <div>Hosting</div>
          <div>Technical SEO</div>
        </div>
      </div>
    ),
    size
  );
}
