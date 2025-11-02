import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/dashboard/layout"

export default function CustomersPage() {
  return (
    <DashboardLayout
      title="Customers"
      description="Monitor customer activity and keep your CRM in one place."
    >
      <Card>
        <CardHeader>
          <CardTitle>Coming soon</CardTitle>
          <CardDescription>
            Customer insights, retention stats, and account health will live here.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          Hook this page up to your backend or analytics provider to surface important customer
          trends.
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
