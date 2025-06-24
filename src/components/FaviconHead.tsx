'use client';

import { useEffect } from 'react';

export default function FaviconHead() {
  useEffect(() => {
    // Remove any existing favicon links
    const existingLinks = document.querySelectorAll('link[rel*="icon"], link[rel*="apple-touch-icon"], link[rel="manifest"]');
    existingLinks.forEach(link => link.remove());

    // Add the new favicon links
    const head = document.head;
    
    const links = [
      { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ];

    links.forEach(linkData => {
      const link = document.createElement('link');
      Object.entries(linkData).forEach(([key, value]) => {
        link.setAttribute(key, value);
      });
      head.appendChild(link);
    });

    // Add the apple-mobile-web-app-title meta tag
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'apple-mobile-web-app-title');
    meta.setAttribute('content', 'Denial');
    head.appendChild(meta);

  }, []);

  return null;
} 