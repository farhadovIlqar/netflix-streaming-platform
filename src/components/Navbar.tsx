"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import RealTimeClock from "./RealTimeViewer"

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
                href="/popular"
                className={clsx(
                  "text-foreground hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  { active: pathname === "/popular" }
                )}
              >
                Popular movies
              </Link>
              <Link
                href="/top-rated-movies"
                className={clsx(
                  "text-foreground hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  { active: pathname === "/top-rated-movies" }
                )}
              >
                Local Top 20
              </Link>
            </div>
          </div>
          <RealTimeClock />
        </div>
      </div>
    </nav>
  )
}
