import React, {useLayoutEffect, useState, useRef} from 'react'
// To try this example comment out App and uncomment ModalExample in index.js


export default function ModalExample() {
    const [show, setShow] = useState(false);
    const popup = useRef();
    const button = useRef();

    // If you run it slowly you will see the popup is placed right under the button first. 
    //Since useEffect is asynchronous and run after the DOM is painted and run. Popup has been painted and placed
    // and then the code moves it.
    // Change to useLayoutEffect and it will be instant
    /*useLayoutEffect*/useLayoutEffect(() => {
        if(popup.current == null || button.current == null)
            return;
        const {bottom} = button.current.getBoundingClientRect(); // measuring the DOM
        popup.current.style.top = `${bottom + 25}px`; // set popup 25px below the bottom of the button
    }, [show])

  return (
      <>
        <button ref={button} onClick={() => setShow(prev => !prev)}>Click Here</button>
        {show && (
            <div style={{position: "absolute"}} ref={popup}>This is a popup</div>
        )}
      </>
  )
}
