import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} SiagaBencana. Semua hak dilindungi.</p>
        <div className="text-xs text-gray-400">
          Dibangun dengan React + Tailwind.
        </div>
      </div>
    </footer>
  )
}

export default Footer
