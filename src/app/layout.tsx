import type { Metadata } from 'next';
import { type ReactNode } from 'react';

import DragProvider from '@/components/layer/DragProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'NextJs Starter Pack',
  description: 'NextJs Starter Pack 2024',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DragProvider>{children}</DragProvider>
      </body>
    </html>
  );
}
