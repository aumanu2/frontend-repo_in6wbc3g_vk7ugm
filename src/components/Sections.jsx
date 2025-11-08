import React from 'react'
import { Home, Map, Newspaper, BarChart2, PhoneCall } from 'lucide-react'

const Item = ({ id, title, description, icon: Icon }) => (
  <section id={id} className="scroll-mt-24">
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-lg bg-blue-50 p-2 text-blue-700">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  </section>
)

const Sections = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <Item
          id="lokasi"
          title="Daftar Lokasi Rawan Bencana & Jalur Evakuasi"
          description="Telusuri peta lokasi rawan bencana di sekitar Anda beserta rute evakuasi terdekat untuk tindakan cepat dan aman."
          icon={Map}
        />
        <Item
          id="informasi"
          title="Informasi Gunung Api & Mitigasi"
          description="Pantau status gunung api terkini, tingkat aktivitas, rekomendasi mitigasi, serta panduan keselamatan."
          icon={Newspaper}
        />
        <Item
          id="statistik"
          title="Data Korban & Statistik"
          description="Lihat ringkasan data korban, dampak bencana, dan tren statistik untuk analisis dan perencanaan."
          icon={BarChart2}
        />
        <Item
          id="kontak"
          title="Kontak Darurat & Pelaporan Cepat"
          description="Hubungi layanan darurat atau lakukan pelaporan cepat untuk mendapatkan bantuan segera."
          icon={PhoneCall}
        />
      </div>
    </div>
  )
}

export default Sections
