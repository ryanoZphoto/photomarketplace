import './globals.css'
import Navigation from './components/Navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 perkspotbx">
        <Navigation />
        {children}
      </body>
    </html>
  )
}