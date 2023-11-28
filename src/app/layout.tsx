//import metadata type from next
import type { Metadata } from 'next';

//import global styles for tailwind
import './globals.css'

//import components
import NavBar from '@/Components/NavBar'
import Footer from '@/Components/Footer'


export const metadata: Metadata = {
  title: 'Abisma Portfolio Website',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' font-montserrat overflow-x-hidden relative scrollbar-thin scroll scrollbar-track-tertiary scrollbar-thumb-accent'>
        <NavBar />
        {children}
        <Footer /> 
        </body>
    </html>
  )
}
