import type { UnlistenFn } from "@tauri-apps/api/event"
import { getCurrentWindow, type Window } from "@tauri-apps/api/window"
import { Copy, Minus, Square, X } from "lucide-react"
import type { CSSProperties, KeyboardEvent } from "react"
import { useCallback, useEffect, useMemo, useState } from "react"

export function WindowTitlebar() {
  const currentWindow = useMemo<Window | null>(() => {
    if (typeof window === "undefined") {
      return null
    }

    try {
      return getCurrentWindow()
    } catch (error) {
      console.error("[WindowTitlebar] Failed to acquire Tauri window handle", error)
      return null
    }
  }, [])

  const [isMaximized, setIsMaximized] = useState(false)

  useEffect(() => {
    if (!currentWindow) return

    let unlisten: UnlistenFn | null = null

    currentWindow
      .isMaximized()
      .then(setIsMaximized)
      .catch((error) => {
        console.error("[WindowTitlebar] Failed to read maximized state", error)
      })

    currentWindow
      .onResized(() => {
        currentWindow
          .isMaximized()
          .then(setIsMaximized)
          .catch((error) => {
            console.error("[WindowTitlebar] Failed to sync maximized state", error)
          })
      })
      .then((dispose) => {
        unlisten = dispose
      })
      .catch((error) => {
        console.error("[WindowTitlebar] Failed to attach resize listener", error)
      })

    return () => {
      unlisten?.()
    }
  }, [currentWindow])

  const invoke = useCallback(
    (action: (appWindow: Window) => Promise<void>) => {
      if (!currentWindow) {
        console.error("[WindowTitlebar] No Tauri window handle available for command")
        return
      }
      action(currentWindow).catch((error) => {
        console.error("[WindowTitlebar] Window command failed", error)
      })
    },
    [currentWindow]
  )

  const handleToggleMaximize = useCallback(() => {
    invoke((appWindow) => appWindow.toggleMaximize())
  }, [invoke])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        handleToggleMaximize()
      }
    },
    [handleToggleMaximize]
  )

  return (
    <div
      role="button"
      tabIndex={0}
      data-tauri-drag-region
      onDoubleClick={handleToggleMaximize}
      onKeyDown={handleKeyDown}
      className="flex h-10 items-center justify-between border-b border-border/60 bg-background/80 pl-3 pr-1 text-xs text-muted-foreground shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="flex select-none items-center gap-2">
        <span className="text-sm font-semibold text-foreground">tauri-ui</span>
        <span className="hidden sm:inline">Dashboard</span>
      </div>

      <div
        data-tauri-drag-region="false"
        className="flex items-center gap-1"
        style={{ WebkitAppRegion: "no-drag" } as CSSProperties}
      >
        <button
          type="button"
          aria-label="Minimize"
          className="flex h-8 w-9 items-center justify-center rounded-md text-foreground transition hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          onClick={() => invoke((appWindow) => appWindow.minimize())}
        >
          <Minus className="h-5 w-5" strokeWidth={2} />
        </button>

        <button
          type="button"
          aria-label={isMaximized ? "Restore" : "Maximize"}
          className="flex h-8 w-9 items-center justify-center rounded-md text-foreground transition hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          onClick={() => invoke((appWindow) => appWindow.toggleMaximize())}
        >
          {isMaximized ? (
            <Copy className="h-4 w-4" strokeWidth={2} />
          ) : (
            <Square className="h-4 w-4" strokeWidth={2} />
          )}
        </button>

        <button
          type="button"
          aria-label="Close"
          className="flex h-8 w-9 items-center justify-center rounded-md text-foreground transition hover:bg-destructive/80 hover:text-destructive-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-destructive"
          onClick={() => invoke((appWindow) => appWindow.close())}
        >
          <X className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
