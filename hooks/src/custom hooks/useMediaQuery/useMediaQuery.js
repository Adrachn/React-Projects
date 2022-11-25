import { useState, useEffect } from "react"
import useEventListener from "../useEventListener/useEventListener"

export default function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = useState(false)
  const [mediaQueryList, setMediaQueryList] = useState(null)

    // essentially an api built into the browser that watches for a
    // media query - checks fif the window matches the media query
    // and return list that we save into our mediaQueryList
  useEffect(() => {
    let list = window.matchMedia(mediaQuery);
    setMediaQueryList(list)
    setIsMatch(list.matches)
  }, [mediaQuery])

  


  // custom hook from our library
    // Set up event listener on mediaQueryList that waits for the "change" event to be rendered
    // whenever our isMatch changes between true/false we want to run some code (setIsMatch)
  useEventListener("change", e => setIsMatch(e.matches), mediaQueryList)

  return isMatch
}