import { createRootRoute, Outlet } from "@tanstack/react-router"
import { invoke } from "@tauri-apps/api/core"
import { useEffect } from "react"

import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { WindowTitlebar } from "@/components/window-titlebar"
import { DashboardLayout } from "@/dashboard/layout"
import { cn } from "@/lib/utils"

function AppShell() {
  useEffect(() => {
    invoke("show_window").catch((error) => {
      console.error("[AppShell] Failed to invoke show_window", error)
    })
  }, [])

  return (
    <ThemeProvider>
      <div className="flex h-screen w-screen flex-col bg-background">
        <WindowTitlebar />
        <div
          style={{
            scrollbarWidth: "none",
          }}
          className={cn(
            "flex-1 overflow-auto pb-8",
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
