import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #E85D04 0%, #FB923C 100%)",
          borderRadius: 9,
          border: "1.5px solid rgba(255,255,255,0.25)",
          color: "#FFF7ED",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: -0.5,
          fontFamily: "Georgia, serif",
        }}
      >
        IP
      </div>
    ),
    { ...size }
  )
}
