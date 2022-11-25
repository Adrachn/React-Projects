import React, {useState} from 'react';
import useUpdateLogger from './useUpdateLogger';


export default function UpdateLoggerComponent() {
    const [name, setName] = useState("");
    useUpdateLogger(name);

  return (
    <input
    type ="text"
    value={name}
    onChange={e => setName(e.target.value)}
    />
  )
}

