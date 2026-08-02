import { Store } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-stone-200/60 overflow-hidden">
        
        <div className="lg:col-span-5 p-8 lg:p-12 bg-linear-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-between relative overflow-hidden">

          <div className="relative z-10 flex items-center gap-3">
            <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <Store className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold tracking-wide text-lg">ShopMarkt</span>
          </div>

          <div className="relative z-10 my-12 lg:my-0">
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight text-white mb-4">
              Welcome to <br className="hidden lg:block" />
              ShopMarkt
            </h1>
            <p className="text-sm font-semibold tracking-wider uppercase text-blue-100">
              Your digital shopping companion
            </p>
          </div>

        </div>

        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">
          <div className="w-full max-w-md mx-auto">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  )
}