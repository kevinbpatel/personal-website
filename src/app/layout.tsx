import "./globals.css";
import { baseURL, fonts, home } from "@/app/resources";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Meta } from "@/components/seo/Meta";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fonts.sora.variable} ${fonts.dmSans.variable} ${fonts.jetbrainsMono.variable}`}
    >
      <body className="relative min-h-screen flex flex-col">
        {/* Global noise texture (like zed.dev) */}
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] bg-repeat"
          style={{
            backgroundImage: "url(/noise.svg)",
            backgroundSize: "180px",
          }}
        />
        <Header />
        <main className="relative z-10 flex-1 pt-14">
          <div className="max-w-[1080px] mx-auto px-6 py-4 animate-page-enter">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
