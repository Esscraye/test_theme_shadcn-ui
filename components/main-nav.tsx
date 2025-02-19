import Link from "next/link"

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Components
      </Link>
      <Link href="/blocks" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Blocks
      </Link>
      <Link href="/example" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Example
      </Link>
    </nav>
  )
}

