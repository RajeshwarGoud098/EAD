import {useState, useEffect} from 'react';
function Toggle()
{
    const [seconds, setSeconds] = useState(0);
    const [isRun, setIsRun] = useState(false);
    useEffect(() => 
        {
            let interval = null;
            if(isRun)
            {
                interval = setInterval(() => {
                    setSeconds(seconds => seconds + 1);
                }, 1000);
            }
            else if(!isRun && seconds !== 0)
            {
                clearInterval(interval);
            }
            return () => clearInterval(interval);
        }, [isRun, seconds]
    );
    const toggleTimer = () => {
        setIsRun(prev => !prev);
    };
    return (
        <div>
            <h1>Seconds: {seconds}s</h1>
            <button onClick={toggleTimer}>{isRun ? 'Stop' : 'Start'}</button>
            <button onClick={() => setSeconds(0)}>Reset</button>
        </div>
    );
}
export default Toggle
