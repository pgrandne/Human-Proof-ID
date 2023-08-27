import { Footer } from "../components/Footer";
import "./globals.css";
import { Providers } from './providers'

export const metadata = {
  title: 'Hackathon Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      <body>
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  )
}
