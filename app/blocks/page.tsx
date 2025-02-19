import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BlocksPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Blocks</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Sign In Form</h2>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Enter your email below to create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="m@example.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Sign In</Button>
          </CardFooter>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Settings Form</h2>
        <Card className="w-[600px]">
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Manage your account settings and set e-mail preferences.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <form>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="notifications">
                <div className="grid gap-4 py-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="email-notifications" />
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="push-notifications" />
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}

