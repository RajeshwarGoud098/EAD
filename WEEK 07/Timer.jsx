import { useEffect } from "react";
import { useState } from "react";
function Timer() {
    const[seconds,setSeconds] = useState(0);
    const[isRun,setIsRun] = useState(false);
    useEffect
    (
        ()=>
        {
            let interval=null;
            if(isRun)
            {
                interval=setInterval(()=>{setSeconds(seconds => seconds+1);},1000);
            }
            else if(!isRun && seconds!==0)
            {
                clearInterval(interval);
            }
            return()=>clearInterval(interval);
        },
        [isRun,seconds]
    );
        return(
            <div>
                <h1>Example problem of Timer!!</h1>
                <button> Seconds: {seconds} </button><br></br>
                <button onClick={()=>setIsRun(true)}>Start</button>
                <button onClick={()=>setIsRun(false)}>Stop</button>
                <button onClick={()=>setSeconds(0)}>Reset</button>
            </div>
        );
}
export default Timer