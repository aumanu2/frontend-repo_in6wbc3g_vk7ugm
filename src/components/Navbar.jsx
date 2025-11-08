import React, { useState } from 'react'
import { Home, Map, Newspaper, BarChart2, PhoneCall, Menu, X } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { label: 'Halaman Utama', icon: Home, href: '#home' },
  { label: 'Daftar Lokasi Rawan & Jalur Evakuasi', icon: Map, href: '#lokasi' },
  { label: 'Informasi Gunung Api & Mitigasi', icon: Newspaper, href: '#informasi' },
  { label: 'Data Korban & Statistik', icon: BarChart2, href: '#statistik' },
  { label: 'Kontak Darurat & Pelaporan Cepat', icon: PhoneCall, href: '#kontak' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="shrink-0"><Logo /></a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
              >
                <Icon className="h-4 w-4" />
                <span className="whitespace-nowrap">{label}</span>
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 space-y-1">
            {navItems.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                onClick={() => setOpen(false)}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
