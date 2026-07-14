import React from 'react';
import type { HostelPreview } from '../../../../product/sections/tenant-discovery/types';
import { Heart, Share, Star, MapPin, Wifi, Coffee, Layers, ShieldCheck, Trophy, GlassWater } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-4 h-4 text-blue-500" />,
  coffee: <Coffee className="w-4 h-4 text-blue-500" />,
  layers: <Layers className="w-4 h-4 text-blue-500" />,
  'glass-water': <GlassWater className="w-4 h-4 text-blue-500" />,
  'shield-check': <ShieldCheck className="w-5 h-5 text-emerald-600" />,
  trophy: <Trophy className="w-5 h-5 text-yellow-500" />
};

export function HostelCard({ property }: { property: HostelPreview }) {
  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden max-w-md mx-auto flex flex-col font-sans">
      {/* Image Header */}
      <div className="relative">
        <img src={property.imageUrl} alt={property.name} className="w-full h-[280px] object-cover" />
        <div className="absolute top-4 left-4">
           {property.isFeatured && <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">Featured Hostel</span>}
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
           <button className="bg-white/80 backdrop-blur-sm p-2.5 rounded-full shadow-sm"><Heart className="w-5 h-5 text-gray-700" /></button>
           <button className="bg-white/80 backdrop-blur-sm p-2.5 rounded-full shadow-sm"><Share className="w-5 h-5 text-gray-700" /></button>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
         <div className="flex justify-between items-start mb-2">
            <div>
               <p className="text-xs text-gray-500 font-medium tracking-wide uppercase mb-1">Hostel</p>
               <h3 className="text-2xl font-bold text-gray-900 leading-tight">{property.name}</h3>
            </div>
            <div className="text-right pl-4">
               <div className="flex items-center text-orange-600 font-bold text-xl justify-end">
                 <Star className="w-5 h-5 fill-current mr-1" />
                 {property.rating}
               </div>
               <p className="text-xs text-gray-500 whitespace-nowrap mt-1">{property.reviewCount} reviews</p>
            </div>
         </div>
         
         <div className="flex items-center text-gray-600 text-sm mb-5">
            <MapPin className="w-4 h-4 mr-1" />
            {property.location} · <button className="ml-1 text-gray-900 font-semibold underline decoration-gray-300 underline-offset-2">View Map</button>
         </div>
         
         {/* Amenities */}
         <div className="flex space-x-4 mb-6 overflow-x-auto pb-2 scrollbar-hide">
            {property.amenities.map(a => (
              <div key={a.id} className="flex items-center space-x-1.5 whitespace-nowrap">
                 {iconMap[a.icon]}
                 <span className="text-sm font-medium text-gray-700">{a.label}</span>
              </div>
            ))}
         </div>
         
         {/* Trust Signals */}
         <div className="space-y-3 mb-6">
            {property.trustSignals.map((ts) => (
               <div key={ts.id} className="flex items-center p-3 border border-gray-100 rounded-2xl bg-white shadow-sm">
                  <div className="p-1">
                    {iconMap[ts.icon]}
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-700">{ts.label}</span>
               </div>
            ))}
         </div>
         
         {/* Footer / Price */}
         <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5">
            <div>
               <p className="text-xs text-gray-500 mb-0.5 font-medium">From</p>
               <div className="flex items-baseline space-x-2">
                  {property.originalPrice && <span className="text-gray-400 line-through text-sm font-medium">€{property.originalPrice.toFixed(2)}</span>}
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">€{property.priceFrom.toFixed(2)}</span>
               </div>
            </div>
            <button className="bg-[#ff5a1f] hover:bg-[#e04a15] text-white font-bold py-3.5 px-6 rounded-full transition-colors shadow-md">
               Choose room
            </button>
         </div>
      </div>
    </div>
  );
}
