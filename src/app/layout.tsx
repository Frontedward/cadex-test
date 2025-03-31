import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from 'antd';
import StyledComponentsRegistry from '@/lib/registry';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CADEX - Your Trusted Partner",
  description: "CADEX is a leading company providing innovative solutions for businesses worldwide.",
  openGraph: {
    title: "CADEX - Your Trusted Partner",
    description: "CADEX is a leading company providing innovative solutions for businesses worldwide.",
    url: "https://cadex-test.vercel.app",
    siteName: "CADEX",
    images: [
      {
        url: "https://cadex-test.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CADEX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CADEX - Your Trusted Partner",
    description: "CADEX is a leading company providing innovative solutions for businesses worldwide.",
    images: ["https://cadex-test.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <StyledComponentsRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#1890ff",
                borderRadius: 4,
              },
            }}
          >
            {children}
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
