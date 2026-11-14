import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'A&M Pro Dispatch',
    short_name: 'A&M Dispatch',
    description: 'Dedicated truck freight dispatch services for owner-operators and carriers in the USA. Your Freight. Our Focus.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0b0f17',
    icons: [
      {
        src: '/logo.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/logo-dark.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
}
