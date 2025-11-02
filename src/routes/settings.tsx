import { createFileRoute } from "@tanstack/react-router"

import SettingsPage from "@/dashboard/pages/settings"

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
})
