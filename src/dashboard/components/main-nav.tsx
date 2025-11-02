import { Link } from "@tanstack/react-router"

import { cn } from "@/lib/utils"

const navItems = [
  { to: "/dashboard", label: "Overview" },
  { to: "/custom", label: "Customers", muted: true },
  { to: "/products", label: "Products", muted: true },
  { to: "/settings", label: "Settings", muted: true },
] satisfies readonly {
  to: string
  label: string
  muted?: boolean
}[]

const baseLinkClass =
  "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          activeOptions={{ exact: true }}
          className={baseLinkClass}
          activeProps={{ className: cn(baseLinkClass, "text-primary") }}
          inactiveProps={{
            className: cn(baseLinkClass, item.muted ? "text-muted-foreground" : undefined),
          }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
