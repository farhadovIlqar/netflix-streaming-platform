"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="bg-card border-b border-border shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className={clsx(
                  "text-foreground hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  { active: pathname === "/" }
                )}
              >
                Home
              </Link>
              <Link
                href="/recommended"
                className={clsx(
                  "text-foreground hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  { active: pathname === "/recommended" }
                )}
              >
                Popular movies
              </Link>
              <Link
                href="/top-movies"
                className={clsx(
                  "text-foreground hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  { active: pathname === "/top-movies" }
                )}
              >
                Local Top 20
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
