"use client"
import { HexColorPicker } from "react-colorful"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { hslToHex, hexToHSL } from "@/lib/color-utils"

interface ColorPickerProps {
  value: string // HSL value
  onChange: (value: string) => void
}

export function ColorPicker({ value, onChange }: ColorPickerProps) {
  // Parse HSL value to hex for the color picker
  const [ h, s, l ] = value.split(" ").map(Number)
  const hexColor = hslToHex(h || 0, s || 0, l || 0)

  const handleHexChange = (newHex: string) => {
    const { h, s, l } = hexToHSL(newHex)
    onChange(`${h} ${s}% ${l}%`)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="w-8 h-8 rounded border" style={{ backgroundColor: `hsl(${value})` }} />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3">
        <HexColorPicker color={hexColor} onChange={handleHexChange} />
      </PopoverContent>
    </Popover>
  )
}

