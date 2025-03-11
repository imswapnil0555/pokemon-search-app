'use client';

import Link from 'next/link';

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
  }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex mb-4 text-sm">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <span className="mx-2 text-gray-500">→</span>}
          <Link
            href={item.href}
            className={`hover:text-blue-600 ${
              index === items.length - 1 ? 'text-gray-600' : 'text-blue-600'
            }`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}