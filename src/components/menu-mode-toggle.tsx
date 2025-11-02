import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Palette, Sprout, SunMoon, Waves } from "lucide-react"
import { useTheme } from "next-themes"

import {
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar"

const themeOptions = [
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
  { value: "dim", label: "Dim", icon: SunMoon },
  { value: "ocean", label: "Ocean", icon: Waves },
  { value: "avocado", label: "Avocado", icon: Sprout },
]

export function MenuModeToggle() {
  const { setTheme, theme: activeTheme } = useTheme()

  return (
    <MenubarMenu>
      <MenubarTrigger className="gap-2">
        <Palette className="h-4 w-4" />
        Theme
      </MenubarTrigger>
      <MenubarContent forceMount>
        <MenubarRadioGroup value={activeTheme ?? "system"}>
          {themeOptions.map(({ value, label, icon: Icon }) => (
            <MenubarRadioItem key={value} value={value} onClick={() => setTheme(value)}>
              <Icon className="mr-2 h-4 w-4" />
              <span>{label}</span>
            </MenubarRadioItem>
          ))}
          <MenubarRadioItem value="system" onClick={() => setTheme("system")}>
            <LaptopIcon className="mr-2 h-4 w-4" />
            <span>System</span>
          </MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
  )
}
