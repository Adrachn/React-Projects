import {useState} from 'react';
import useDebounce from './useDebounce';

export default function DebounceComponent() {
    const [count, setCount] = useState(10);
    useDebounce(() => alert(count), 1000, [count]); // when the count stops changing, after 1s send and alert

  return (
    <div>
        <div>{count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}
