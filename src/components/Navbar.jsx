import React, { useEffect, useRef, useState } from 'react'
import { Home, Map, Newspaper, BarChart2, PhoneCall, Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { label: 'Halaman Utama', icon: Home, href: '#home' },
  { label: 'Daftar Lokasi Rawan & Jalur Evakuasi', icon: Map, href: '#lokasi' },
  { label: 'Informasi Gunung Api & Mitigasi', icon: Newspaper, href: '#informasi' },
  { label: 'Data Korban & Statistik', icon: BarChart2, href: '#statistik' },
  { label: 'Kontak Darurat & Pelaporan Cepat', icon: PhoneCall, href: '#kontak' },
]

const Navbar = () => {
  const [openMobile, setOpenMobile] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false)
      }
    }
    function handleEsc(e) {
      if (e.key === 'Escape') {
        setOpenDropdown(false)
        setOpenMobile(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="shrink-0"><Logo /></a>

          {/* Desktop: use a single dropdown trigger instead of long row */}
          <div className="hidden md:flex items-center gap-3" ref={dropdownRef}>
            <button
              onClick={() => setOpenDropdown((v) => !v)}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 border border-gray-200"
              aria-haspopup="true"
              aria-expanded={openDropdown}
            >
              <Menu className="h-4 w-4" />
              <span>Menu</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown && (
              <div
              role="menu"
              className="absolute mt-48 right-8 md:right-auto md:left-auto md:mt-40 w-80 max-w-[90vw] rounded-lg border border-gray-200 bg-white shadow-lg"
              >
                <nav className="p-2">
                  {navItems.map(({ label, icon: Icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setOpenDropdown(false)}
                      className="flex items-start gap-3 rounded-md px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                    >
                      <Icon className="h-5 w-5 mt-0.5" />
                      <span>{label}</span>
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100"
            onClick={() => setOpenMobile((v) => !v)}
            aria-label="Toggle Menu"
          >
            {openMobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu (drawer style) */}
      {openMobile && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 space-y-1">
            {navItems.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                onClick={() => setOpenMobile(false)}
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
