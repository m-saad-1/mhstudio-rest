import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MhStudio',
    short_name: 'MhStudio',
    description: 'Premium websites for growing local businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafaf9',
    theme_color: '#fafaf9',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
