import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>
        <div className="max-w-4xl mx-auto p-6">
          {children}
        </div>
      </body>
    </html>
  )
}
