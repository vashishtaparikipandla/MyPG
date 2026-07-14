import React from 'react';
import { AppShell } from './components/AppShell';

export default function ShellPreview() {
  return (
    <div className="w-full h-[800px] max-h-[80vh]">
      <AppShell>
        <div className="border-2 border-dashed border-gray-200 rounded-lg h-full flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-gray-500 text-lg font-medium">Section Content Renders Here</p>
            <p className="text-gray-400 text-sm mt-2">When designing individual sections, they will appear inside this shell.</p>
          </div>
        </div>
      </AppShell>
    </div>
  );
}
