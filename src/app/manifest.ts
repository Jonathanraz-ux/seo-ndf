import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Noctis Digital Forge',
    short_name: 'Noctis Forge',
    description: 'Nous concevons des solutions web rapides, modernes et sur mesure.',
    start_url: '/',
    display: 'standalone',
    background_color: '#05050a',
    theme_color: '#05050a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
