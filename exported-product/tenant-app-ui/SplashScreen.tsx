import React from 'react';
import { Home } from 'lucide-react';

export function SplashScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-[#ff5a1f] min-h-screen flex flex-col items-center justify-center p-6 text-white font-sans cursor-pointer" onClick={onNext}>
      <div className="bg-white p-5 rounded-[2rem] shadow-xl shadow-orange-900/20 mb-6">
         <Home className="w-16 h-16 text-[#ff5a1f]" />
      </div>
      <h1 className="text-5xl font-extrabold tracking-tight mb-3">My PG</h1>
      <p className="text-orange-100 text-lg font-medium text-center">Find your perfect stay.<br/>Join your community.</p>
      
      <div className="absolute bottom-12">
         <div className="animate-pulse bg-white/20 px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase">
            Tap to start
         </div>
      </div>
    </div>
  );
}
