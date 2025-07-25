import type { Metadata } from 'next';
import './globals.css';
import { LayoutMainProvider } from '../components/templates/providers/layout-main-provider';

export const metadata: Metadata = {
  title: {
    template: '%s | Todo App',
    default: 'Todo App',
  },
  description: 'Todo App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400&f[]=bevellier@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased container mx-auto">
        <LayoutMainProvider>{children}</LayoutMainProvider>
      </body>
    </html>
  );
}
