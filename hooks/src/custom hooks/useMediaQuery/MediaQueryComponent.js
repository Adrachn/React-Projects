// One of the complaints to react is if you want to do styles based of sizes you
// can't use media queriesinside the style tag inside your jsx, you need to do that
// in css. In this hook you can write media queries that are going to render out js code

import useMediaQuery from "./useMediaQuery"

// Will print true or false depending on if screen is large (200px in this case)

export default function MediaQueryComponent() {
  const isLarge = useMediaQuery('(min-width: 200px)')
  return <div>Large: {isLarge.toString()}</div>

}
