import React from 'react';
import { MainNav } from './MainNav';
import { UserMenu } from './UserMenu';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-white font-sans text-gray-900 border border-gray-200 overflow-hidden rounded-md shadow-sm">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col border-r border-gray-200 bg-gray-50">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4 mb-4">
            <span className="text-xl font-bold tracking-tight">My PG</span>
          </div>
          <MainNav />
        </div>
        <UserMenu />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Mobile header placeholder */}
        <div className="md:hidden flex items-center justify-between bg-gray-50 border-b border-gray-200 p-4">
          <span className="text-xl font-bold tracking-tight">My PG</span>
          <div className="h-6 w-6 bg-gray-300 rounded" />
        </div>
        <main className="flex-1 overflow-y-auto bg-white p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
