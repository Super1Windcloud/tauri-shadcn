import { createFileRoute } from "@tanstack/react-router"

import ProductsPage from "@/dashboard/pages/products"

export const Route = createFileRoute("/products")({
  component: ProductsPage,
})
