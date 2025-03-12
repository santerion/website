"use client"

import Link from "next/link"
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

export function Navbar() {
  return (
    <header className="w-full py-4 px-6 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Santerion
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[200px]">
                  <p className="text-sm text-muted-foreground mb-2">
                    Our projects will appear here
                  </p>
                  {/* Project links will go here */}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
} 