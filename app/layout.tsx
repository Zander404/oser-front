import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { AppSideBar } from "@/components/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body className="overflow-x-hidden">
        <SidebarProvider>
          <AppSideBar />
          <ThemeProvider>
            <div className="flex flex-col w-full min-h-screen">
              {/* MOBILE HEADER */}
              <header className="flex md:hidden items-center justify-between p-4 border-b bg-white sticky top-0 z-40">
                <div className="flex items-center gap-2">
                  <SidebarTrigger />
                  <span className="font-bold text-lg">MVP Dashboard</span>
                </div>
              </header>

              <main className="flex-1 w-full relative">
                <div className="hidden md:block absolute top-4 left-4 z-40">
                  <SidebarTrigger />
                </div>
                {children}
              </main>
            </div>
            <Toaster />
          </ThemeProvider>
        </SidebarProvider>
      </body>
    </html >
  )
}
