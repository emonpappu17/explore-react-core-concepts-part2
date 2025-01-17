import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    // console.log(abc); 
    // [4, ƒ] //useState [0, f] log kore

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div style={{ border: '2px solid yellow' }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}