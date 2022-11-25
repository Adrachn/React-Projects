import useStateWithValidation from "./useStateWithValidation";
// Takes in username. Default "", which is less than 5 so starts false


export default function StateWithValidation(){
    const [username, setUsername, isValid] = useStateWithValidation(name => name.length > 5, "");

    return (
        <>
            <div>Valid: {isValid.toString()}</div>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
        </>
    )


}