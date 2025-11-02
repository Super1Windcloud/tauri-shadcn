import { createFileRoute } from "@tanstack/react-router"

import CustomersPage from "@/dashboard/pages/customers"

export const Route = createFileRoute("/custom")({
  component: CustomersPage,
})
