"use client"

import * as React from "react"
import { Moon, Sun, RotateCcw } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ColorPicker } from "@/components/color-picker"

const colorVariables = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring",
]

export function ThemeCustomizer() {
  const { setTheme } = useTheme()
  const [colors, setColors] = React.useState<Record<string, string>>({})
  const [defaultColors, setDefaultColors] = React.useState<Record<string, string>>({})
  const [mounted, setMounted] = React.useState(false)

  const updateColor = (variable: string, value: string) => {
    // Ensure the value is in the correct HSL format
    const hslValue = value.startsWith("hsl") ? value : `hsl(${value})`
    setColors((prev) => ({ ...prev, [variable]: hslValue }))
    document.documentElement.style.setProperty(`--${variable}`, value)
  }

  const resetColors = () => {
    Object.entries(defaultColors).forEach(([variable, value]) => {
      document.documentElement.style.setProperty(`--${variable}`, value)
    })
    setColors({ ...defaultColors })
  }

  const loadColors = React.useCallback(() => {
    const root = document.documentElement
    const style = getComputedStyle(root)
    const newColors: Record<string, string> = {}

    colorVariables.forEach((variable) => {
      const value = style.getPropertyValue(`--${variable}`).trim()
      // Store the raw HSL values without the 'hsl()' wrapper
      newColors[variable] = value.replace(/^hsl$$|$$$/g, "").trim()
    })

    setColors(newColors)
    setDefaultColors(newColors)
  }, [])

  React.useEffect(() => {
    setMounted(true)
    loadColors()
  }, [loadColors])

  // Handle theme changes
  React.useEffect(() => {
    if (mounted) {
      const timeoutId = setTimeout(loadColors, 0)
      return () => clearTimeout(timeoutId)
    }
  }, [mounted, loadColors]) // Removed unnecessary 'theme' dependency

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Customize Theme</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium leading-none">Theme Customizer</h4>
            <Button variant="ghost" size="icon" onClick={resetColors}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
          <Tabs defaultValue="colors">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="colors">Colors</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="colors" className="mt-4 space-y-4">
              <div className="max-h-[300px] overflow-y-auto pr-4">
                {colorVariables.map((variable) => (
                  <div key={variable} className="grid grid-cols-3 items-center gap-4 mb-2">
                    <Label htmlFor={variable} className="text-xs">
                      {variable}
                    </Label>
                    <div className="col-span-2 flex gap-2">
                      <Input
                        id={variable}
                        value={colors[variable] || ""}
                        onChange={(e) => updateColor(variable, e.target.value)}
                        className="h-8"
                      />
                      <ColorPicker
                        value={colors[variable] || "0 0% 0%"}
                        onChange={(value) => updateColor(variable, value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="settings" className="mt-4 space-y-4">
              <div className="flex items-center space-x-2">
                <Label>Theme</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleThemeChange("light")}>Light</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleThemeChange("dark")}>Dark</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleThemeChange("system")}>System</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </PopoverContent>
    </Popover>
  )
}

