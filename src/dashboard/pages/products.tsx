import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/dashboard/layout"

export default function ProductsPage() {
  return (
    <DashboardLayout
      title="Products"
      description="Track inventory, launches, and performance across your catalog."
    >
      <Card>
        <CardHeader>
          <CardTitle>Product analytics</CardTitle>
          <CardDescription>
            Plug your product metrics in here to keep tabs on top performers and low stock alerts.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          Use cards, charts, or tables to highlight growth, conversion funnels, and inventory
          status.
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
