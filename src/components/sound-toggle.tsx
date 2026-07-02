"use client"

import { Volume2Icon, VolumeOffIcon } from "lucide-react"

import { useSoundPreference } from "@/hooks/soundcn/use-sound-preference"

import { Tooltip, TooltipContent, TooltipTrigger } from "./base/ui/tooltip"
import { Button } from "./ui/button"

export function SoundToggle() {
 const { enabled, setEnabled } = useSoundPreference()

 return (
 <Tooltip>
 <TooltipTrigger
 render={
 <Button
 className="relative touch-manipulation border-none"
 variant="ghost"
 size="icon-sm"
 aria-label={enabled ? "Disable sound" : "Enable sound"}
 onClick={() => setEnabled(!enabled)}
 >
 <span
 className="absolute size-12 pointer-fine:hidden"
 aria-hidden
 />
 {enabled ? (
 <Volume2Icon aria-hidden />
 ) : (
 <VolumeOffIcon aria-hidden />
 )}
 </Button>
 }
 />
 <TooltipContent className="px-3">
 {enabled ? "Sound on" : "Sound off"}
 </TooltipContent>
 </Tooltip>
 )
}
