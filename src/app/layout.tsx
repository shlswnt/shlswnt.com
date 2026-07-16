import type { Metadata } from "next"
import "./globals.css"

import ConsoleTag from "@/components/ConsoleTag"

export const metadata: Metadata = {
  metadataBase: new URL('https://shlswnt.com'),
  title: "Sahil Sawant | Engineer",
  description: "I'm Sahil, an engineer who loves bringing ideas to life with design + code.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ConsoleTag />
        <header>
          <nav>
            <a href="/">WORK</a> | <a href="/fun">FUN</a> | <a href="/about">ABOUT</a> | <a href="/resume">RESUME</a>
          </nav>
        </header>
        {children}
        <footer>
          <p>© {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  )
}
