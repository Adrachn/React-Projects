import { useEffect } from "react"
import useMediaQuery from "../useMediaQuery/useMediaQuery"
import useLocalStorage from "../useLocalStorage/useLocalStorage"

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode")
  //checks setting in browser - if user prefers dark, it will start in dark
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  // if they have set dark mode with the setDarkMode, use that. Otherwise default to
  // whatever their browser settings are
  const enabled = darkMode ?? prefersDarkMode

  // whenever dakMode state changes, toggle the dark mode class
  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled)
  }, [enabled])

  return [enabled, setDarkMode]
}