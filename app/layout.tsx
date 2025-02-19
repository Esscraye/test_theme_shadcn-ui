import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeCustomizer } from "@/components/theme-customizer"
import { MainNav } from "@/components/main-nav"
import { ToastProvider } from "@/components/ui/toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "shadcn/ui Showcase",
  description: "A showcase of shadcn/ui components, blocks, and examples",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <header className="border-b">
              <div className="container flex items-center justify-between py-4">
                <MainNav />
                <ThemeCustomizer />
              </div>
            </header>
            <ToastProvider>
            <main className="flex-1 container py-6">{children}</main>
            </ToastProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

