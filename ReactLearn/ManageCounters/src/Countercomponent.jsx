import React from "react";
import { useState } from "react";
import { CounterProvider, useCounter } from "./Context";
function Counter({counterName}){
    const{increment , decrement , reset} = useCounter()
    // const [counterOne,setcounterOne ]= useState(0)
    // const [counterTwo,setcounterTwo ]= useState(0)
    // const [counterThree,setcounterThree ]= useState(0)
    // const [counterFour,setcounterFour ]= useState(0)

    return(
<CounterProvider value={{increment , decrement , reset
}}>
    <div>
 <button > {counterName}</button>       
 <button 
 type="click" onClick={increment}
 >increment</button>
 <button 
 type="click" onClick={decrement}
 >decrement</button>
 <button type="click" onClick={reset}
 >reset</button>
 </div>
 <br/>
 {/* <div>
 <button type="click">{counterTwo}</button>
 <button 
 type="click" onClick={increment}
 >increment</button>
 <button 
 type="click" onClick={decrement}
 >decrement</button>
 <button type="click" onClick={reset}
 >reset</button>
 </div>
 <br/>
 <div>
 <button type="click">{counterThree}</button>
 <button 
 type="click" onClick={increment}
 >increment</button>
 <button 
 type="click" onClick={decrement}
 >decrement</button>
 <button type="click" onClick={reset}
 >reset</button>
 </div>
 <br/>
 <div>
 <button type="click">{counterFour}</button>
 <button 
 type="click" onClick={increment}
 >increment</button>
 <button 
 type="click" onClick={decrement}
 >decrement</button>
 <button type="click" onClick={reset}
 >reset</button>
 </div>
 */}

</ CounterProvider>
    )
}

export default Counter