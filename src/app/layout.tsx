import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#05050a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://noctis-digital-forge.netlify.app'),
  title: {
    default: "Noctis Digital Forge | Agence Web Premium",
    template: "%s | Noctis Digital Forge"
  },
  description: "Nous concevons des solutions web rapides, modernes et sur mesure pour PME, restaurants, hôtels et agences.",
  keywords: ["Agence Web", "Création site web", "Développement sur mesure", "React", "Next.js", "Sous-traitance", "Performance"],
  authors: [{ name: "Noctis Digital Forge" }],
  creator: "Noctis Digital Forge",
  publisher: "Noctis Digital Forge",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    title: "Noctis Digital Forge | Agence Web Premium",
    description: "Nous concevons des solutions web rapides, modernes et sur mesure pour PME, restaurants, hôtels et agences.",
    siteName: "Noctis Digital Forge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noctis Digital Forge | Agence Web Premium",
    description: "Nous concevons des solutions web rapides, modernes et sur mesure pour PME, restaurants, hôtels et agences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://noctis-digital-forge.netlify.app/#organization",
      "name": "Noctis Digital Forge",
      "url": "https://noctis-digital-forge.netlify.app",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "jonathanrazafiarijaona@gmail.com",
        "telephone": "+261349320184",
        "contactType": "customer service"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://noctis-digital-forge.netlify.app/#website",
      "url": "https://noctis-digital-forge.netlify.app",
      "name": "Noctis Digital Forge",
      "publisher": {
        "@id": "https://noctis-digital-forge.netlify.app/#organization"
      }
    },
    {
      "@type": "ProfessionalService",
      "name": "Noctis Digital Forge",
      "image": "https://noctis-digital-forge.netlify.app/favicon.ico",
      "email": "jonathanrazafiarijaona@gmail.com",
      "telephone": "+261349320184",
      "url": "https://noctis-digital-forge.netlify.app"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
