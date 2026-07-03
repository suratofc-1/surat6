// 'use client' DIHAPUS: halaman ini tidak punya interaktivitas yang butuh JS
// di sisi client (elemen <details>/<summary> adalah native HTML, tidak butuh
// hook React). Dengan menjadikannya Server Component, halaman bisa di-render
// di server (SSR/statis) sehingga konten langsung tersedia untuk crawler dan
// LCP jadi lebih cepat.

import Image from "next/image";

// Data FAQ dipisah ke array supaya bisa dipakai untuk render UI
// SEKALIGUS untuk generate JSON-LD FAQPage tanpa duplikasi teks.
const faqItems = [
  {
    question: "Apa saja layanan utama yang tersedia?",
    answer:
      "Kami menyediakan layanan hiburan online lengkap, mulai dari permainan kasual, hiburan langsung, hingga aktivitas komunitas. Semua dikemas dengan sistem yang cepat dan mudah digunakan.",
  },
  {
    question: "Bagaimana cara bergabung dan mulai bermain?",
    answer:
      "Daftar lewat tautan resmi, lengkapi data akun, lalu pilih permainan atau layanan yang diinginkan. Prosesnya cepat dan kami selalu menyediakan panduan untuk pengguna baru.",
  },
  {
    question: "Metode pembayaran dan keamanan transaksi?",
    answer:
      "Transaksi difasilitasi melalui metode pembayaran populer dengan proteksi enkripsi. Setiap detail dikunci untuk menjaga kenyamanan dan privasi pengguna.",
  },
  {
    question: "Apakah platform ini bisa diakses lewat ponsel?",
    answer:
      "Ya. SURAT4D dirancang responsif untuk mobile dan desktop sehingga pengguna dapat mengakses layanan kapan saja dari ponsel atau tablet.",
  },
  {
    question: "Apakah diperlukan batas usia untuk bergabung?",
    answer:
      "Pengguna harus mengikuti aturan usia dan persyaratan layanan sesuai ketentuan. Pastikan membaca syarat penggunaan sebelum mendaftar.",
  },
  {
    question: "Bagaimana jika saya butuh dukungan pelanggan?",
    answer:
      "Tim dukungan kami siap membantu lewat chat atau kontak resmi. Cukup pilih menu dukungan pada halaman dan hubungi kami kapan saja.",
  },
  {
    question: "Di mana saya dapat membaca kebijakan dan ketentuan?",
    answer:
      "Kebijakan privasi dan ketentuan layanan tersedia di halaman resmi kami. Pastikan memeriksanya sebelum menggunakan platform.",
  },
];

export default function Home() {
  const bannerImage = "/banner-surat4d-cepat-akses-tercepat.jpg";

  return (
    <div className="min-h-screen bg-[#020b18] text-white font-sans antialiased selection:bg-amber-500 selection:text-black">
      {/* JSON-LD FAQPage: memberi peluang tampil sebagai rich snippet FAQ
          di hasil pencarian Google. Konten diambil dari array faqItems
          di atas agar selalu sinkron dengan yang ditampilkan ke user. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* 1. HEADER (LOGO DI TENGAH, TOMBOL MASUK/DAFTAR DIHAPUS) */}
      <header className="sticky top-0 z-50 bg-[#020b18]/90 backdrop-blur-md border-b border-amber-500/10 px-3 py-2 md:px-8 md:py-3">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          {/* Sektor Logo SURAT4D — presisi di tengah */}
          <Image
            src="/logo.png"
            alt="Logo SURAT4D"
            width={220}
            height={56}
            className="h-9 md:h-14 max-w-[140px] md:max-w-[220px] w-auto object-contain"
          />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 md:py-12 space-y-8 md:space-y-14">
        {/* 2. BANNER UTAMA */}
        <section className="relative max-w-[600px] mx-auto aspect-square rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-black/50">
          <div className="w-full h-full bg-[#041329]">
            {/* priority: banner ini kemungkinan besar adalah LCP element
                (gambar terbesar di viewport pertama), jadi diprioritaskan
                agar tidak lazy-loaded dan mempercepat LCP. */}
            <Image
              src={bannerImage}
              alt="Banner Utama SURAT4D"
              width={600}
              height={600}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 3. ENAM TOMBOL CTA — memanjang ke bawah (stack vertikal) */}
        <section className="flex flex-col gap-3 max-w-xl mx-auto px-2">
          <a
            href="https://shorthe.link/SURAT4D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3.5 px-3 rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>MASUK AKUN</span> ↗
          </a>
          <a
            href="https://shorthe.link/SURAT4D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3.5 px-3 rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>DAFTAR AKUN</span> ↗
          </a>
          <a
            href="https://shorthe.link/SURAT4D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3.5 px-3 rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase bg-[#0b2a4a] text-sky-100 border border-sky-400/30 shadow-lg hover:bg-[#103b63] hover:border-sky-400 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>LINK ALTERNATIF 1</span> ↗
          </a>
          {/* TODO: ganti href di bawah ini dengan link alternatif 2 yang asli */}
          <a
            href="https://shorthe.link/SURAT4D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3.5 px-3 rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase bg-[#0b2a4a] text-sky-100 border border-sky-400/30 shadow-lg hover:bg-[#103b63] hover:border-sky-400 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>LINK ALTERNATIF 2</span> ↗
          </a>
          {/* TODO: ganti href di bawah ini dengan link alternatif 3 yang asli */}
          <a
            href="https://shorthe.link/SURAT4D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3.5 px-3 rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase bg-[#0b2a4a] text-sky-100 border border-sky-400/30 shadow-lg hover:bg-[#103b63] hover:border-sky-400 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>LINK ALTERNATIF 3</span> ↗
          </a>
          <a
            href="https://t.me/maxwinslotsurat4d"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3.5 px-3 rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase bg-[#0b2a4a] text-sky-100 border border-sky-400/30 shadow-lg hover:bg-[#103b63] hover:border-sky-400 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>TELEGRAM</span> 📞
          </a>
        </section>

        {/* 4. TEKS SEO PREMIUM TEMA HIBURAN DIGITAL */}
        <section className="text-center max-w-3xl mx-auto space-y-4 md:space-y-6 px-2 pt-4">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight text-white">
            SATU PINTU AKSES UNTUK <br className="hidden md:inline" />
            <span className="text-white">SEMUA LAYANAN SURAT4D</span>
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
            SURAT4D dibangun sebagai halaman akses terpusat yang merangkum
            seluruh pintu masuk resmi ke layanan kami dalam satu tampilan
            sederhana. Setiap tautan diperbarui secara berkala agar Anda
            selalu terhubung tanpa kendala teknis. Sistem keamanan berlapis
            menjaga setiap sesi tetap privat, sementara desain yang ringan
            memastikan halaman ini tetap cepat diakses baik dari jaringan
            seluler maupun koneksi rumah.
          </p>
        </section>

        {/* 5. DUA KOTAK INFORMASI LAYANAN PRIMA & KEUNGGULAN UTAMA */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto px-2">
          {/* BOX PERTAMA */}
          <div className="bg-[#041329]/50 backdrop-blur-sm border border-sky-500/20 rounded-2xl p-6 shadow-xl">
            <div className="space-y-4 text-left text-xs md:text-sm text-gray-200">
              <div className="pb-3 border-b border-sky-500/10">
                {/* p -> h2: ini judul section, penting untuk hierarki heading */}
                <h2 className="text-sm text-sky-300 uppercase tracking-[0.24em] font-semibold">
                  Alasan Memilih Halaman Ini
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span> Semua tautan resmi
                  terkumpul rapi, tidak perlu mencari-cari di tempat lain.
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span> Tautan diperiksa
                  dan diperbarui rutin supaya tetap aktif.
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span> Tim bantuan
                  merespons pertanyaan pengguna dengan cepat.
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">•</span> Tampilan ringkas
                  yang nyaman dibuka dari HP maupun laptop.
                </li>
              </ul>
            </div>
          </div>

          {/* BOX KEDUA */}
          <div className="bg-[#041329]/50 backdrop-blur-sm border border-sky-500/20 rounded-2xl p-6 shadow-xl">
            <div className="space-y-4 text-left text-xs md:text-sm text-gray-200">
              <div className="pb-3 border-b border-sky-500/10">
                <h2 className="text-sm text-sky-300 uppercase tracking-[0.24em] font-semibold">
                  Tentang Halaman Akses SURAT4D
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                Halaman ini berfungsi sebagai gerbang utama menuju layanan
                SURAT4D, dibuat agar pengguna tidak kebingungan mencari
                tautan yang benar. Kami rutin mengecek status setiap link
                dan memperbarui halaman ini setiap kali ada perubahan.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto px-2 mt-6">
          <div className="bg-[#041329]/50 backdrop-blur-sm border border-sky-500/20 rounded-2xl p-6 shadow-xl">
            <div className="space-y-4 text-left text-xs md:text-sm text-gray-200">
              <div className="pb-3 border-b border-sky-500/10">
                <h2 className="text-sm text-sky-300 uppercase tracking-[0.24em] font-semibold">
                  Standar Layanan Kami
                </h2>
              </div>
              <div className="space-y-3">
                <p>
                  <span className="font-semibold text-sky-200">
                    Kecepatan:
                  </span>{" "}
                  Halaman dan tautan dimuat ringan agar tidak membuat Anda
                  menunggu lama.
                </p>
                <p>
                  <span className="font-semibold text-sky-200">
                    Kejelasan:
                  </span>{" "}
                  Setiap tombol diberi label yang jelas sesuai fungsinya
                  masing-masing.
                </p>
                <p>
                  <span className="font-semibold text-sky-200">
                    Privasi:
                  </span>{" "}
                  Data yang Anda masukkan pada tautan resmi terlindungi
                  dengan mekanisme enkripsi.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#041329]/50 backdrop-blur-sm border border-sky-500/20 rounded-2xl p-6 shadow-xl">
            <div className="space-y-4 text-left text-xs md:text-sm text-gray-200">
              <div className="pb-3 border-b border-sky-500/10">
                <h2 className="text-sm text-sky-300 uppercase tracking-[0.24em] font-semibold">
                  Yang Membuat Berbeda
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-sky-400">✓</span> Tampilan menyesuaikan
                  otomatis di layar kecil maupun besar.
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">✓</span> Tidak ada iklan
                  atau tautan pihak ketiga yang mengganggu.
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">✓</span> Navigasi satu
                  halaman, tinggal pilih tombol yang dibutuhkan.
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">✓</span> Konten ditinjau
                  ulang secara berkala agar tetap relevan.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ SECTION — render dari array faqItems, sinkron dengan JSON-LD di atas */}
        <section className="max-w-7xl mx-auto px-2 mt-10">
          <div className="rounded-3xl border border-sky-500/20 bg-[#041a3e]/80 p-6 shadow-2xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-sky-300">
                  Tanya Jawab Seputar Akses
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-white">
                  Masih ada yang mengganjal? Cek dulu di sini.
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-4 py-2 text-sm text-sky-200">
                <span className="text-lg">?</span> FAQ
              </span>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-sky-500/20 bg-[#02102f]/80 p-4"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-semibold text-white">
                    <span>{item.question}</span>
                    <span className="text-sky-300 transition-transform duration-200 group-open:-rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-white/5 py-6 text-center text-xs text-gray-500">
        © 2026 SEO SURAT4D. All Rights Reserved.
      </footer>
    </div>
  );
}
