import './globals.css';

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = productionHost ? new URL(`https://${productionHost}`) : undefined;

export const metadata = {
  metadataBase: siteUrl,
  title: 'Vaibhav Rajpoot — Video Editor for Creators & Brands',
  description: 'Vaibhav Rajpoot is a video editor for YouTubers, creators, and brands. Explore his approach and get in touch about your next project.',
  icons: { icon: '/assets/favicon.svg' },
  alternates: siteUrl ? { canonical: '/' } : undefined,
  openGraph: {
    type: 'website',
    title: 'Vaibhav Rajpoot — Video Editor',
    description: "Thoughtful video editing for creators and brands. Let's make every second count.",
    url: siteUrl,
    images: siteUrl ? ['/assets/hero.jpg'] : undefined,
  },
};

export const viewport = {
  themeColor: '#111311',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
