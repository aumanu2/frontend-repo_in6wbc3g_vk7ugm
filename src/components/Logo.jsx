import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shadow-sm">
        SB
      </div>
      <div className="leading-tight">
        <p className="text-lg font-semibold text-gray-900">SiagaBencana</p>
        <p className="text-xs text-gray-500 -mt-0.5">Informasi & Mitigasi</p>
      </div>
    </div>
  )
}

export default Logo
