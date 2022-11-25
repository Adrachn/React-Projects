import {useState, useEffect} from "react";

export default function EffectComponent() {
    const [resourceType, setResourceType] = useState("posts");

    // Prints everytime resourceType changes. Without the last array parameter
    // it runs every time the application renders
    // if array is empty - it's on mount
    useEffect(() => {
        console.log("rendered");
    }, [resourceType])

    return (
        <>
            <div>
                <button onClick={() => setResourceType("posts")}>Posts</button>
                <button onClick={() => setResourceType("users")}>Users</button>
                <button onClick={() => setResourceType("comments")}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
        </>
    );
}