import './globals.css'

export const metadata = {
  title: 'Pokemon Search App',
  description: 'Search and explore Pokemon using PokeAPI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}