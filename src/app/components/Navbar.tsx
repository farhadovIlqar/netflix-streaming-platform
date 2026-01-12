import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-foreground hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/sse"
                  className="text-foreground hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Server Side Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
