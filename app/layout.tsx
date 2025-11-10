import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import I18nProvider from "@/lib/i18n-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const url = "https://hanstudio.vercel.app/"

export const metadata: Metadata = {
  title: "Hans Digital Studio - Web & Mobile App Solutions",
  description:
    "Hans Digital Studio is a professional software house specializing in web and mobile application development. We deliver innovative, AI-powered solutions to help businesses grow and stay ahead in the digital era.",
  keywords: [
    "Hans Digital Studio",
    "web development",
    "pembuatan aplikasi web",
    "mobile app development",
    "pembuatan aplikasi mobile",
    "software house",
    "Next.js developer",
    "React Native developer",
    "AI-powered solutions",
  ],
  authors: [
    { name: "Hans Digital Studio", url },
  ],
  openGraph: {
    title: "Hans Digital Studio - Web & Mobile App Solutions",
    description:
      "We design and build high-quality web and mobile apps to help businesses grow and innovate.",
    url,
    siteName: "Hans Digital Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url,
        width: 1200,
        height: 630,
        alt: "Hans Digital Studio - Web & Mobile App Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hans Digital Studio - Web & Mobile App Solutions",
    description:
      "Professional software house delivering innovative web and mobile applications.",
    images: [`${url}logo.webp`],
    creator: "@achmadhanafy",
  },
  alternates: {
    canonical: url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
