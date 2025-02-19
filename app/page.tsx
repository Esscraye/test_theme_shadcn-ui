"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Toast } from "@/components/ui/toast"
import { Toggle } from "@/components/ui/toggle"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const components = [
  { name: "Accordion", id: "accordion" },
  { name: "Alert", id: "alert" },
  { name: "Avatar", id: "avatar" },
  { name: "Badge", id: "badge" },
  { name: "Button", id: "button" },
  { name: "Card", id: "card" },
  { name: "Checkbox", id: "checkbox" },
  { name: "Collapsible", id: "collapsible" },
  { name: "Command", id: "command" },
  { name: "Context Menu", id: "context-menu" },
  { name: "Dialog", id: "dialog" },
  { name: "Dropdown Menu", id: "dropdown-menu" },
  { name: "Hover Card", id: "hover-card" },
  { name: "Input", id: "input" },
  { name: "Label", id: "label" },
  { name: "Menubar", id: "menubar" },
  { name: "Navigation Menu", id: "navigation-menu" },
  { name: "Popover", id: "popover" },
  { name: "Progress", id: "progress" },
  { name: "Radio Group", id: "radio-group" },
  { name: "Scroll Area", id: "scroll-area" },
  { name: "Select", id: "select" },
  { name: "Separator", id: "separator" },
  { name: "Sheet", id: "sheet" },
  { name: "Skeleton", id: "skeleton" },
  { name: "Slider", id: "slider" },
  { name: "Switch", id: "switch" },
  { name: "Table", id: "table" },
  { name: "Tabs", id: "tabs" },
  { name: "Textarea", id: "textarea" },
  { name: "Toast", id: "toast" },
  { name: "Toggle", id: "toggle" },
  { name: "Tooltip", id: "tooltip" },
]

export default function ComponentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Components</h1>
      <div className="flex justify-between items-start">
        <div className="w-1/4 pr-4">
          <Input
            type="search"
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="space-y-2">
              {filteredComponents.map((component) => (
                <a key={component.id} href={`#${component.id}`} className="block p-2 rounded-lg hover:bg-accent">
                  {component.name}
                </a>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="w-3/4 space-y-10">
          <section id="accordion">
            <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section id="alert">
            <h2 className="text-2xl font-semibold mb-4">Alert</h2>
            <Alert>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>You can add components to your app using the cli.</AlertDescription>
            </Alert>
          </section>

          <section id="avatar">
            <h2 className="text-2xl font-semibold mb-4">Avatar</h2>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </section>

          <section id="badge">
            <h2 className="text-2xl font-semibold mb-4">Badge</h2>
            <Badge>Badge</Badge>
          </section>

          <section id="button">
            <h2 className="text-2xl font-semibold mb-4">Button</h2>
            <Button>Click me</Button>
          </section>

          <section id="card">
            <h2 className="text-2xl font-semibold mb-4">Card</h2>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </section>

          <section id="checkbox">
            <h2 className="text-2xl font-semibold mb-4">Checkbox</h2>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </section>

          <section id="collapsible">
            <h2 className="text-2xl font-semibold mb-4">Collapsible</h2>
            <Collapsible>
              <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
              <CollapsibleContent>
                Yes. Free to use for personal and commercial projects. No attribution required.
              </CollapsibleContent>
            </Collapsible>
          </section>

          <section id="command">
            <h2 className="text-2xl font-semibold mb-4">Command</h2>
            <Command>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>Calendar</CommandItem>
                  <CommandItem>Search Emoji</CommandItem>
                  <CommandItem>Calculator</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </section>

          <section id="context-menu">
            <h2 className="text-2xl font-semibold mb-4">Context Menu</h2>
            <ContextMenu>
              <ContextMenuTrigger>Right click here</ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>Profile</ContextMenuItem>
                <ContextMenuItem>Billing</ContextMenuItem>
                <ContextMenuItem>Team</ContextMenuItem>
                <ContextMenuItem>Subscription</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </section>

          <section id="dialog">
            <h2 className="text-2xl font-semibold mb-4">Dialog</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from
                    our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </section>

          <section id="dropdown-menu">
            <h2 className="text-2xl font-semibold mb-4">Dropdown Menu</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>

          <section id="hover-card">
            <h2 className="text-2xl font-semibold mb-4">Hover Card</h2>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">@nextjs</Button>
              </HoverCardTrigger>
              <HoverCardContent>The React Framework – created and maintained by @vercel.</HoverCardContent>
            </HoverCard>
          </section>

          <section id="input">
            <h2 className="text-2xl font-semibold mb-4">Input</h2>
            <Input type="email" placeholder="Email" />
          </section>

          <section id="label">
            <h2 className="text-2xl font-semibold mb-4">Label</h2>
            <Label htmlFor="email">Email</Label>
          </section>

          <section id="menubar">
            <h2 className="text-2xl font-semibold mb-4">Menubar</h2>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>New Tab</MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarItem>Open...</MenubarItem>
                  <MenubarItem>Save</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </section>

          <section id="navigation-menu">
            <h2 className="text-2xl font-semibold mb-4">Navigation Menu</h2>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </section>

          <section id="popover">
            <h2 className="text-2xl font-semibold mb-4">Popover</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
              </PopoverTrigger>
              <PopoverContent>Place content for the popover here.</PopoverContent>
            </Popover>
          </section>

          <section id="progress">
            <h2 className="text-2xl font-semibold mb-4">Progress</h2>
            <Progress value={33} />
          </section>

          <section id="radio-group">
            <h2 className="text-2xl font-semibold mb-4">Radio Group</h2>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
          </section>

          <section id="scroll-area">
            <h2 className="text-2xl font-semibold mb-4">Scroll Area</h2>
            <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
              Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
              under the king&apos;s pillow, in his soup, even in the royal toilet. The king was furious, but he couldn&apos;t seem
              to stop Jokester, no matter what he tried...
            </ScrollArea>
          </section>

          <section id="select">
            <h2 className="text-2xl font-semibold mb-4">Select</h2>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </section>

          <section id="separator">
            <h2 className="text-2xl font-semibold mb-4">Separator</h2>
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
              <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>
          </section>

          <section id="sheet">
            <h2 className="text-2xl font-semibold mb-4">Sheet</h2>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from
                    our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </section>

          <section id="skeleton">
            <h2 className="text-2xl font-semibold mb-4">Skeleton</h2>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </section>

          <section id="slider">
            <h2 className="text-2xl font-semibold mb-4">Slider</h2>
            <Slider defaultValue={[33]} max={100} step={1} />
          </section>

          <section id="switch">
            <h2 className="text-2xl font-semibold mb-4">Switch</h2>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
          </section>

          <section id="table">
            <h2 className="text-2xl font-semibold mb-4">Table</h2>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          <section id="tabs">
            <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">Make changes to your account here.</TabsContent>
              <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
          </section>

          <section id="textarea">
            <h2 className="text-2xl font-semibold mb-4">Textarea</h2>
            <Textarea placeholder="Type your message here." />
          </section>

          <section id="toast">
            <h2 className="text-2xl font-semibold mb-4">Toast</h2>
            <Toast>
              <p>Scheduled: Catch up with Marie</p>
            </Toast>
          </section>

          <section id="toggle">
            <h2 className="text-2xl font-semibold mb-4">Toggle</h2>
            <Toggle aria-label="Toggle italic">
              <i>I</i>
            </Toggle>
          </section>

          <section id="tooltip">
            <h2 className="text-2xl font-semibold mb-4">Tooltip</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </section>
        </div>
      </div>
    </div>
  )
}

