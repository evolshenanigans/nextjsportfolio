import './globals.css'
import { Inter } from "@next/font/google";
import Navigation from "./components/Navbar";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name='description' content="Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
        </head>
      <body className='flex h-full flex-col'>
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
