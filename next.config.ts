/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Bagian ini WAJIB ada agar menghasilkan file HTML statis
  images: {
    unoptimized: true, // Tambahkan ini juga agar gambar aman di Cloudflare
  },
};

export default nextConfig;