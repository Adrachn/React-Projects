import {useState} from "react";
import useEventListener from '../useEventListener/useEventListener';

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});
  
    // whenever we resize our window, set the windowsize to the new width & height of our window
    // Then return it to the user
    useEventListener("resize", () => {
        setWindowSize({width: window.innerWidth, height: window.innerHeight});
    })
    return windowSize
}