
import {useState, useEffect} from "react";

export default function EffectComponent() {
    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    // adding a listener on mount (empty array[] as second argument)
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        // remove event listener at cleanup & unmount with a return
        // runs before the useEffect runs to clean up whatever from last time
        // to prevent re-adding the event-listener all the time
        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
        console.log("rendered");
    }, [resourceType])

 

    return (
        <>
            <div>{windowWidth}</div>
            <h1>api with users</h1>
            <div>
                <button onClick={() => setResourceType("posts")}>Posts</button>
                <button onClick={() => setResourceType("users")}>Users</button>
                <button onClick={() => setResourceType("comments")}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>
    );
}