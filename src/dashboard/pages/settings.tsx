import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DashboardLayout } from "@/dashboard/layout"

export default function SettingsPage() {
  return (
    <DashboardLayout
      title="Settings"
      description="Configure team preferences, notifications, and workspace defaults."
      actions={<Button variant="outline">Save changes</Button>}
    >
      <Card>
        <CardHeader>
          <CardTitle>Workspace details</CardTitle>
          <CardDescription>
            Update the basics for your team and keep things organized.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="workspace-name">Workspace name</Label>
            <Input id="workspace-name" placeholder="Acme Inc." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="workspace-url">Workspace URL</Label>
            <Input id="workspace-url" placeholder="https://app.example.com/acme" />
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
