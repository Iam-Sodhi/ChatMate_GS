"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/context/theme-provider";


export function ModeToggle() {
  const {theme,toggleTheme}=useTheme();
 


  return (
    <div
      className=" bg-white text-black w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "dark" ?<Moon className="text-white"  />:<Sun/> }
    </div>
  )
}
