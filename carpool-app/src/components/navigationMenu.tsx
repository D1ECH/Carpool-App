// src/components/NavigationMenu.tsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { useState } from "react";

export default function AppNavigationMenu() {
  const [activeItem, setActiveItem] = useState("");

  const items = [
    { title: "Home", href: "/" },
    { title: "Dashboard", href: "/dashboard" },
    { title: "Profile", href: "/profile" },
    { title: "Settings", href: "/settings" },
  ];

  return (
    <NavigationMenu>
    <div className="w-screen flex justify-center bg-gray-800 p-4">
        <NavigationMenuList className="flex gap-4 text-white">
        {items.map((item) => (
            <NavigationMenuItem className="relative" key={item.title}>
            <NavigationMenuTrigger
                onClick={() => setActiveItem(item.title)}
                className={`px-4 py-2 rounded hover:bg-gray-700 ${
                activeItem === item.title ? "bg-gray-700" : ""
                }`}
            >
                {item.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className=" bg-gray-700 p-2 rounded mt-1 left-1/2 -translate-x-1/2 absolute">
                <NavigationMenuLink asChild>
                <a href={item.href}>{item.title} Link</a>
                </NavigationMenuLink>
            </NavigationMenuContent>
            </NavigationMenuItem>
        ))}
        </NavigationMenuList>
    </div>
    <NavigationMenuIndicator />
    <NavigationMenuViewport />
    </NavigationMenu>

  );
}
