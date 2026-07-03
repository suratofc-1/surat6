import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // TODO: ganti "blank.pages.dev" dengan domain final kamu sebelum deploy
  metadataBase: new URL("https://surat6.pages.dev"),
  title: {
    default: "SURAT4D | Portal Akses Resmi & Terpadu Dengan Kemudahan Akses ",
    template: "%s | SURAT4D",
  },
  description:
    "SURAT4D adalah halaman akses tunggal yang menghubungkan Anda ke seluruh kanal resmi kami - praktis, ringan diakses dari perangkat apa pun.",
  applicationName: "SURAT4D",
  authors: [{ name: "SURAT4D" }],
  category: "technology",
  // 'keywords' sengaja tidak diisi: Google tidak lagi memakainya untuk ranking,
  // dan pengisian berlebihan justru berisiko dibaca sebagai keyword-stuffing.
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "SURAT4D — Satu Tautan, Semua Akses",
    description:
      "Tidak perlu lagi mencari-cari link yang benar. SURAT4D merangkum semua jalur akses resmi kami dalam satu halaman yang cepat, rapi, dan mudah dibagikan.",
    url: "https://surat6.pages.dev/",
    siteName: "SURAT4D",
    images: [
      {
        url: "https://surat6.pages.dev/thumbnail-surat4d-popularitas-tinggi.jpg",
        width: 1200,
        height: 630,
        alt: "SURAT4D — Portal Akses Resmi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SURAT4D — Satu Tautan, Semua Akses",
    description:
      "Halaman resmi yang merangkum semua jalur akses SURAT4D dalam satu tempat: cepat ditemukan, mudah dibagikan.",
    images: ["thumbnail-surat4d-popularitas-tinggi.jpg"],
  },
  // TODO: isi ulang dengan kode verifikasi Google Search Console milik domain final kamu
  // verification: {
  //   google: "KODE_VERIFIKASI_KAMU",
  // },
};

// Viewport & theme-color sekarang idiomatik lewat export terpisah,
// bukan manual <meta> di dalam <head> (mengikuti konvensi Next.js App Router).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020b18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/*
          Canonical tag CUKUP satu sumber: sudah didefinisikan lewat
          `alternates.canonical` di objek metadata di atas.
          Tag <link rel="canonical"> manual DIHAPUS agar tidak dobel/ambigu.
        */}
        <meta name="apple-mobile-web-app-title" content="SURAT4D" />

        {/*
          JSON-LD WebSite: 'potentialAction/SearchAction' pada versi sebelumnya
          tidak valid (target hanya URL homepage, bukan template pencarian).
          Karena situs ini belum punya fitur search internal, potentialAction
          dihapus seluruhnya untuk menghindari warning "Invalid object type"
          di Google Search Console > Structured Data.
          Jika nanti fitur search sudah ada, baru tambahkan kembali dengan
          format: "target": "https://surat6.pages.dev/search?q={search_term_string}"
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SURAT4D",
              url: "https://surat6.pages.dev",
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
