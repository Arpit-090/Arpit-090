import { createContext , useContext } from "react";

export const CounterContext = createContext({

    counters:{
        counterOne: 0,
        counterTwo: 0,
        counterThree: 0,
        counterFour: 0
    },
    increment:(counterName)=>{},
    decrement:(counterName)=>{},
    reset:(counterName)=>{}
})

export const useCounter=() =>{
     useContext(CounterContext)
}

export const CounterProvider=CounterContext.Provider