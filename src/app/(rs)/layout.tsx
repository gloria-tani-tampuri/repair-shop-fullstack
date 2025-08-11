import Header from "@/components/Header"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }:any) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Header />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}