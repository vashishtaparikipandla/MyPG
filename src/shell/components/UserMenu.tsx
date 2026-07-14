import React from 'react';

export function UserMenu() {
  return (
    <div className="border-t border-gray-200 p-4">
      <div className="flex items-center">
        <div>
          <div className="h-8 w-8 rounded-full bg-gray-300" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700">User Name</p>
          <p className="text-xs font-medium text-gray-500">View profile</p>
        </div>
      </div>
    </div>
  );
}
