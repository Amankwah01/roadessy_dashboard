'use client';
import { LogOut, Moon, Settings, SquareMenu, Sun, User } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SidebarTrigger } from "./ui/sidebar"
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { setTheme } = useTheme()
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* LEFT */}
      <div className="flex w-full items-center">
        <SidebarTrigger>
          <Button variant="ghost" size="icon" asChild>
            <SquareMenu className="h-5 w-5" />
            <span className="sr-only">Open sidebar</span>
          </Button>
        </SidebarTrigger>
        <div className="w-full flex-1  items-center text-center">
          <Link href="/dashboard" className="ml-4 font-bold text-lg">
            Roadessy Dashboard
          </Link>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/">Home</Link>
        {/* THEME MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            {/* <DropdownMenuItem onClick={() => setTheme("blue")}>
              Blue
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("green")}>
              Green
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("neutral")}>
              Neutral
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("red")}>
              Red
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("rose")}>
              Rose
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("yellow")}>
              Yellow
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}> 
              System
            </DropdownMenuItem>*/}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* USER MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/50754869?v=4" />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
              LogOut
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
