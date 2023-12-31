import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import NavbarComponent from '@/components/navbar'
import FooterComponent from '@/components/footer'
import CookieDrawerSetupComponent from '@/components/cookie-drawer-setup'
import { Toaster } from "@/components/ui/sonner"

const inter = Roboto({
  subsets: ['latin', 'latin-ext'],
  weight: '300',
})

export const metadata: Metadata = {
  title: 'Punjabi Society of Greater Houston',
  description: 'Punjabi Society of Greater Houston website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        "bg-background font-[roboto] antialiased min-h-[100vw] flex flex-col",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarComponent />
          <div className='lg:max-w-6xl md:max-w-4xl mx-auto px-4 sm:px-6 xl:px-0 pt-4 my-4 w-full'>
            {children}
          </div>
          <FooterComponent />
          <CookieDrawerSetupComponent />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
