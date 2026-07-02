"use client"

import { useCallback, useSyncExternalStore } from "react"

const STORAGE_KEY = "sound-enabled"
const CHANGE_EVENT = "sound-preference-change"

function readEnabled(): boolean {
 if (typeof window === "undefined") return false
 // Sound is opt-in: off unless explicitly enabled.
 return window.localStorage.getItem(STORAGE_KEY) === "true"
}

function subscribe(callback: () => void) {
 window.addEventListener(CHANGE_EVENT, callback)
 window.addEventListener("storage", callback)
 return () => {
 window.removeEventListener(CHANGE_EVENT, callback)
 window.removeEventListener("storage", callback)
 }
}

export function getSoundEnabled(): boolean {
 return readEnabled()
}

export function useSoundPreference() {
 const enabled = useSyncExternalStore(
 subscribe,
 readEnabled,
 () => false
 )

 const setEnabled = useCallback((value: boolean) => {
 window.localStorage.setItem(STORAGE_KEY, String(value))
 window.dispatchEvent(new Event(CHANGE_EVENT))
 }, [])

 return { enabled, setEnabled } as const
}
