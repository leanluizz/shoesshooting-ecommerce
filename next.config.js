/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'], // Adicione aqui o host da sua imagem, no caso o Firebase Storage
  },
}

module.exports = nextConfig
