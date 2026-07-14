import React from 'react';
import data from '../../../../product/sections/tenant-discovery/data.json';
import { HostelCard } from './components';

export default function TenantDiscoveryView() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 overflow-y-auto">
       <div className="max-w-md mx-auto space-y-8 px-4 pb-20">
          <div className="mb-6">
             <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore</h1>
             <p className="text-gray-500 text-sm">Find your perfect stay</p>
          </div>
          {data.properties.map((property) => (
             <HostelCard key={property.id} property={property as any} />
          ))}
       </div>
    </div>
  );
}
