import React, { useState } from 'react';
import data from '../../../../product/sections/tenant-discovery/data.json';
import { HostelCard, SplashScreen, LoginScreen, IdVerificationScreen } from './components';
import { Search, Filter } from 'lucide-react';

export default function TenantDiscoveryView() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'login' | 'id' | 'discovery'>('splash');

  if (currentScreen === 'splash') {
    return <SplashScreen onNext={() => setCurrentScreen('login')} />;
  }
  
  if (currentScreen === 'login') {
    return <LoginScreen onBack={() => setCurrentScreen('splash')} onNext={() => setCurrentScreen('id')} />;
  }
  
  if (currentScreen === 'id') {
    return <IdVerificationScreen onBack={() => setCurrentScreen('login')} onNext={() => setCurrentScreen('discovery')} />;
  }

  // Discovery Screen
  return (
    <div className="bg-gray-50 min-h-screen py-8 overflow-y-auto font-sans">
       <div className="max-w-md mx-auto px-4 pb-20">
          
          {/* Header */}
          <div className="mb-6 flex justify-between items-end">
             <div>
               <h1 className="text-3xl font-bold text-gray-900 mb-1">Explore</h1>
               <p className="text-gray-500 font-medium">Find your perfect stay</p>
             </div>
             <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className="w-full h-full object-cover" />
             </div>
          </div>
          
          {/* Search Bar */}
          <div className="mb-8 flex space-x-2">
             <div className="flex-1 bg-white border border-gray-100 rounded-2xl flex items-center px-4 shadow-sm">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Where do you want to stay?" 
                  className="w-full py-4 outline-none font-medium text-gray-900 placeholder:text-gray-400"
                />
             </div>
             <button className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm text-gray-700 hover:bg-gray-50">
                <Filter className="w-5 h-5" />
             </button>
          </div>
          
          <div className="space-y-8">
            {data.properties.map((property) => (
               <HostelCard key={property.id} property={property as any} />
            ))}
          </div>
       </div>
    </div>
  );
}
