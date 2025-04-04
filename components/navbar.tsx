"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Button variant="ghost" className="p-0 font-bold text-xl hover:bg-transparent" asChild>
              <a href="#about" className="text-foreground/80 hover:text-foreground/80">
                JBE
              </a>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              About Me
            </Link>

            <Link href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#certifications" className="text-foreground/80 hover:text-foreground transition-colors">
              Certifications
            </Link>
            <Link href="#education" className="text-foreground/80 hover:text-foreground transition-colors">
            Education
          </Link>
            <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
              <a href="/Juan-Bautista-Espino-CV.pdf" download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="md:hidden container py-4 bg-background border-b">
              <div className="flex flex-col space-y-4">
                <Link
                    href="#about"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                  About Me
                </Link>

                <Link
                    href="#projects"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                    href="#certifications"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                  Certifications
                </Link>
                <Link href="#skills" className="text-foreground/80 hover:text-foreground transition-colors">
                  Skills
                </Link>
                <Link
                    href="#education"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                  Education
                </Link>

                <Button variant="outline" size="sm" className="flex items-center gap-2 w-full justify-center" asChild>
                  <a href="/Juan-Bautista-Espino-CV.pdf" download>
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
        )}
      </nav>
  )
}

