import React from 'react';

export function MainNav() {
  const items = [
    { label: 'Dashboard', href: '#' },
    { label: 'Hostels', href: '#' },
    { label: 'Tenants', href: '#' },
    { label: 'Financials', href: '#' },
    { label: 'Issues', href: '#' },
    { label: 'Admin', href: '#' },
  ];

  return (
    <nav className="flex-1 space-y-1 px-2 py-4">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
