import useEventListener from "../useEventListener/useEventListener"

export default function useClickOutside(ref, cb) {
  // IF we click inside thing, do nothing. If outside call callback (closing modal)
    useEventListener(
    "click",
    e => {
      if (ref.current == null || ref.current.contains(e.target)) return
      cb(e)
    },
    document
  )
}