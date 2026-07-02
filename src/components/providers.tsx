"use client"

import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider } from "next-themes"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider as RadixTooltipProvider } from "@/components/ui/tooltip"
import { TooltipProvider as BaseTooltipProvider } from "@/components/base/ui/tooltip"
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts"
import { ConsentManager } from "@/registry/components/consent-manager/consent-manager"

export function Providers({ children }: { children: React.ReactNode }) {
 return (
 <JotaiProvider>
 <ThemeProvider
 enableSystem
 disableTransitionOnChange
 enableColorScheme
 storageKey="theme"
 defaultTheme="system"
 attribute="class"
 >
 <ConsentManager>
 <BaseTooltipProvider>
 <RadixTooltipProvider>{children}</RadixTooltipProvider>
 </BaseTooltipProvider>
 </ConsentManager>

 <KeyboardShortcuts />
 <Toaster position="top-center" />
 </ThemeProvider>
 </JotaiProvider>
 )
}
