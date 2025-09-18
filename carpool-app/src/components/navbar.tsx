import { useAuth } from "../hooks/useAuth"
import { signOut } from "../lib/auth"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const { user } = useAuth()

  return (
    <nav className="w-full h-16 border-b shadow-sm flex items-center justify-between px-6">
      <h1 className="text-gray-900 text"> Carpool App</h1>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer">
            <Avatar>
              <AvatarFallback>
                {user?.email?.[0].toUpperCase() ?? "U"}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-700">{user?.email}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={signOut}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}
