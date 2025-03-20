import React from 'react';
import './globals.css';

export const metadata = {
  title: "photo marketplace",
  description: "A marketplace for photos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add meta tags, favicons, or other global head content here */}
      </head>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
