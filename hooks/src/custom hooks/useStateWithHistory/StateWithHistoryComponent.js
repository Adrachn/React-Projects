import {useState} from 'react';
import useStateWithHistory from './useStateWithHistory';

export default function StateWithHistoryComponent() {;
    // Store history - an array of everything the state has ever been, including pointer to where 
    // in the history we currently are & functions to go back, forward and specific point in history
    const [count, setCount, {history, pointer, back, forward, go}] = useStateWithHistory(1);
    const [name, setName] = useState("Linus");

  return (
    <div>
        <div>{count}</div>
        <div>{history.join(", ")}</div>
        <div>Pointer - {pointer}</div>
        <div>{name}</div>
        <button onClick={() => setCount(currentCount => currentCount * 2)}>Double</button>
        <button onClick={() => setCount(currentCount => currentCount + 1)}>Increment</button>
        <button onClick={back}>Back</button>
        <button onClick={forward}>Forward</button>
        <button onClick={() => go(2)}>Go to index 2</button>
        <button onClick={() => setName("PaLinjen")}>Change Name</button>

    </div>
  )
}
