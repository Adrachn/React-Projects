import {useRef} from "react";
import useSize from "./useSize";

// whatever we want to get the size of, we pass as reference in useSize hook
export default function SizeComponent(){
    const ref = useRef();
    const size = useSize(ref);

    return(
        <>
            <div>{JSON.stringify(size)}</div>
            <textarea ref={ref}></textarea>
        </>
    )
}