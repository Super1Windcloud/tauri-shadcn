import { createRootRoute, Outlet } from "@tanstack/react-router"
import { invoke } from "@tauri-apps/api/core"
import { useEffect } from "react"

import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { DashboardLayout } from "@/dashboard/layout"
import { cn } from "@/lib/utils"

function AppShell() {
  useEffect(() => {
    invoke("show_window").catch(() => {
      // Safe to ignore when the Tauri backend isn't running (e.g. browser preview)
    })
  }, [])

  return (
    <ThemeProvider>
      <div className="h-screen w-screen">
        <div
          style={{
            scrollbarWidth: "none",
          }}
          className={cn(
            "bg-background h-full overflow-auto border-t pb-8",
            "scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md"
          )}
        >
          <Outlet />
        </div>
      </div>
      <TailwindIndicator />
    </ThemeProvider>
  )
}

function NotFound() {
  return (
    <DashboardLayout
      title="Page not found"
      description="The page you are looking for does not exist."
    >
      <div className="text-muted-foreground">
        Use the navigation above to jump back into the dashboard.
      </div>
    </DashboardLayout>
  )
}

export const Route = createRootRoute({
  component: AppShell,
  notFoundComponent: NotFound,
})
