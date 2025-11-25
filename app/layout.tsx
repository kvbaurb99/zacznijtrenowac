import "./globals.css";
import { Navbar } from "@/src/components/ui/navbar";
import { Footer } from "@/src/components/ui/footer";
import { StructuredData } from "@/src/components/seo/structured-data";
import { siteMetadata } from "@/src/components/seo/metadata";
import { fontVariables } from "@/lib/fonts";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <meta name="geo.region" content="PL-24" />
        <meta name="geo.placename" content="Bielsko-Biała" />
        <StructuredData />
      </head>
      <body
        className={`${fontVariables} antialiased min-h-screen bg-zinc-950 text-zinc-100 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black selection:bg-white/20`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
