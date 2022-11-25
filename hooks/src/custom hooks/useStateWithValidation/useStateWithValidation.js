import {useState, useCallback} from "react";
// updates isValid state everytime we change our state "is it valid now?"

export default function useStateWithValidation(validationFunc, initialValue){
    const [state, setState] = useState(initialValue);
    const [isValid, setIsValid] = useState(() => validationFunc(state));

    const onChange = useCallback(nextState => {
        const value = typeof nextState === "function" ? nextState(state) : nextState
        setState(value);
        setIsValid(validationFunc(value));
    }, [validationFunc])

    return [state, onChange, isValid];
}