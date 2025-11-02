import type { ReactNode } from "react"

import { MenuModeToggle } from "@/components/menu-mode-toggle"
import { Menubar } from "@/components/ui/menubar"
import { MainNav } from "@/dashboard/components/main-nav"
import TeamSwitcher from "@/dashboard/components/team-switcher"
import { UserNav } from "@/dashboard/components/user-nav"

interface DashboardLayoutProps {
  title: string
  description?: string
  actions?: ReactNode
  children: ReactNode
}

export function DashboardLayout({ title, description, actions, children }: DashboardLayoutProps) {
  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center gap-4 overflow-hidden px-4">
          <TeamSwitcher className="shrink-0 w-[160px] sm:w-[200px]" />
          <MainNav className="mx-6 hidden min-w-0 flex-1 overflow-x-auto whitespace-nowrap md:flex" />
          <div className="ml-auto flex shrink-0 items-center space-x-4">
            <Menubar className="border-none bg-transparent p-0 shadow-none">
              <MenuModeToggle />
            </Menubar>
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            {description ? <p className="text-muted-foreground">{description}</p> : null}
          </div>
          {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
        </div>
        {children}
      </div>
    </div>
  )
}
