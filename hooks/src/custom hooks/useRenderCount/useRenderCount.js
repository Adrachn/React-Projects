import { useEffect, useRef } from "react"
// strict mode double renders our components, but not our useeffects
// it is there to make sure there's no weird side-effects going on
// this is why we have to use our count++ inside useEffect

export default function useRenderCount() {
  const count = useRef(1)
  useEffect(() => count.current++)
  return count.current
}