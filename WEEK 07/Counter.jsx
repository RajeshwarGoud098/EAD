import { useState,useEffect } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    function inc() {
        setCount(count+1);
    }
    return(
        <div>
            <h1>This is an example of counter problem!!</h1>
            <button>Count : {count} </button>
            <br></br>
            <button onClick={inc}>INCREMENT</button>
            <button onClick={()=> setCount(count-1)}>DECREMENT</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    );
}
export default Counter