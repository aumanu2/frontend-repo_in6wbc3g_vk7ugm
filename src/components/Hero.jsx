import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Portal Siaga Bencana
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Akses cepat ke informasi kebencanaan, jalur evakuasi, mitigasi, dan kontak darurat. Dibuat untuk membantu masyarakat tetap siap dan waspada.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#lokasi" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium shadow hover:bg-blue-700">Lihat Lokasi Rawan</a>
              <a href="#kontak" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-blue-700 font-medium shadow border border-blue-100 hover:bg-blue-50">Kontak Darurat</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl border border-blue-100 bg-white shadow-sm p-4">
              <div className="h-full w-full rounded-lg bg-gradient-to-br from-blue-100 via-indigo-100 to-sky-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
