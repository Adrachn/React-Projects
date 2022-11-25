// Check if something is on the screen - then runs some code. In this case make visible
//Like if scrolling down to a certain point. When that point is in screen view - make visible/load in etc

import {useRef} from "react";
import useOnScreen from "./useOnScreen";

const styleObj = {
    fontSize: 36,
    color: "#a54f1",
    //textAlign: "center",
    //paddingTop: "100px",
}

export default function OnScreenComponent(){
    const headerTwoRef = useRef();
    // When it's 100px above the bottom of the screen - do something. If 0 ot will 
    // appear as soon as it becomes visible on the screen
    const visible = useOnScreen(headerTwoRef, "-200px")

    return (
        <div>
            <h1>Header</h1>
            <p style={styleObj}>
            Lorem ipsum dolor sit amet. Est laborum soluta id ipsa galisum et 
            quia similique et laboriosam sint et voluptatibus aliquam eum eligendi 
            aliquam aut optio voluptatibus. Sed tempora deserunt est architecto sequi 
            ab itaque harum est nostrum beatae qui eaque voluptates ab voluptas consectetur? 
            Et rerum possimus ad omnis ipsa est voluptatem magni non omnis esse ea amet 
            consequatur? Sit vitae galisum sed Quis neque quo similique culpa qui voluptas 
            quasi non quas quia. Vel aperiam nobis ut quod placeat et nesciunt voluptatem cum
             dolores voluptas et neque natus ab dicta beatae est commodi possimus. Non saepe
              amet ut enim velit aut odio rerum quo perferendis eius eum voluptatem rerum 
              et rerum alias. Ex illo aspernatur est dolores amet quo aspernatur obcaecati
               ex magni molestiae et aliquid mollitia. Sit ratione Quis ab dignissimos ipsa
                cum velit error est culpa vitae est provident ullam qui natus enim. Non quia
                 earum aut recusandae commodi dolor aperiam At blanditiis saepe et rerum illum
                  qui corporis soluta et consequatur expedita. Non dolorem inventore aut quibusdam
                   rerum ea voluptas voluptas sit tempore omnis eum dolores maiores est internos optio.
            </p>
            <h1 ref={headerTwoRef}>Header 2 {visible && "(visible)"}</h1>
            <p style={styleObj}>
            Lorem ipsum dolor sit amet. Est laborum soluta id ipsa galisum et 
            quia similique et laboriosam sint et voluptatibus aliquam eum eligendi 
            aliquam aut optio voluptatibus. Sed tempora deserunt est architecto sequi 
            ab itaque harum est nostrum beatae qui eaque voluptates ab voluptas consectetur? 
            Et rerum possimus ad omnis ipsa est voluptatem magni non omnis esse ea amet 
            consequatur? Sit vitae galisum sed Quis neque quo similique culpa qui voluptas 
            quasi non quas quia. Vel aperiam nobis ut quod placeat et nesciunt voluptatem cum
             dolores voluptas et neque natus ab dicta beatae est commodi possimus. Non saepe
              amet ut enim velit aut odio rerum quo perferendis eius eum voluptatem rerum 
              et rerum alias. Ex illo aspernatur est dolores amet quo aspernatur obcaecati
               ex magni molestiae et aliquid mollitia. Sit ratione Quis ab dignissimos ipsa
                cum velit error est culpa vitae est provident ullam qui natus enim. Non quia
                 earum aut recusandae commodi dolor aperiam At blanditiis saepe et rerum illum
                  qui corporis soluta et consequatur expedita. Non dolorem inventore aut quibusdam
                   rerum ea voluptas voluptas sit tempore omnis eum dolores maiores est internos optio.
            </p>
        </div>
    )
}
