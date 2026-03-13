import { ImageResponse } from "next/og";
import { person } from "@/app/resources/content";

export const runtime = "edge";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Portfolio";

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "8rem",
        background: "#09090b",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4rem",
          fontFamily: "system-ui, sans-serif",
          color: "#fafafa",
        }}
      >
        <span
          style={{
            fontSize: "7rem",
            lineHeight: "7.5rem",
            letterSpacing: "-0.03em",
            whiteSpace: "pre-wrap",
            textWrap: "balance",
          }}
        >
          {title}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          <img
            src={`https://kevinbpatel.com${person.avatar}`}
            style={{
              width: "10rem",
              height: "10rem",
              objectFit: "cover",
              borderRadius: "100%",
              border: "3px solid #3b82f6",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                fontSize: "4rem",
                lineHeight: "4.5rem",
              }}
            >
              {person.name}
            </span>
            <span
              style={{
                fontSize: "2rem",
                lineHeight: "2.5rem",
                color: "#3b82f6",
              }}
            >
              {person.role}
            </span>
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1280,
      height: 720,
    }
  );
}
