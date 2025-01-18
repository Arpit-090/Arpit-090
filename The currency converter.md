# THE CURRENCY CONVERTER
## the api we need 
[api](https://latest.currency-api.pages.dev/v1/currencies/eur.json)
the link => https://latest.currency-api.pages.dev/v1/currencies/eur.json


### create custom hook for use i.e. 
## useCurrencyInfo

this is code 
```
import { useState , useEffect } from "react";

function useCurrencyInfo(currency){
  const [data, setdata] = useState(null);
  useEffect(() => {
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setdata(res[currency]));
  }, [currency]);
  return data;
  
}

export default useCurrencyInfo;

```
## The component we need i.e Input.jsx
create a component file inside src and add a page named Input.jsx


 this is the code
```

import React ,{useId} from 'react';

function Inputbox({
      label,
     className = "",
     Amount ,
     onAmountchange ,
     onCurrencychange ,
     CurrencyOptions= [],
     selectCurrency = "usd" 
     }) {
        const inputId = useId()

    return (
        <>
        <div className="bg-gray-100 p-4 flex">
        <label enterKeyHint={inputId} className=" w-1/2">
        {label}
        </label>
        <input
        id={inputId}
        className="w-1/2" type="number" 
        placeholder="Amount"
        value={Amount} 
        onChange={(e)=> onAmountchange && onAmountchange(Number(e.target.value))}/>
        
        <div className="w-1/2 flex flex-wrap justify-end text-right">
           <p className="text-black mb-2 w-full">
           currency type</p> 

           <select 
           className=" rounded-lg px-1 bg-gray-100"
           value={selectCurrency}
           onChange={(e)=> onCurrencychange && onCurrencychange(e.target.value)}
           >
             {CurrencyOptions.map((currency) => (
                 <option  key={currency} value={currency}>
                 {currency}
                  </option>
             )) }
             </select>
             </div>
             </div>
            

             </>
    )
}

export default Inputbox

```
## now integrate all of them in App.jsx
this is the code

```
import React from "react";
import Class from "./Class";
import Inputbox from "./components/Input.jsx";
import useCurrencyInfo from "./hooks/customhook.js";
import { useState } from "react";

const Reactele = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click here to visit google"
);

function App() {
  const [Amount, setAmount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [To, setTo] = useState("inr");
  const [convertedamount, setconvertedamount] = useState();
  const CurrencyInfo = useCurrencyInfo(from);
  const options =CurrencyInfo ? Object.keys(CurrencyInfo):[];

  const swap = () => {
    const temp = from;
    setfrom(To);
    setTo(temp);

    const tempAmount = Amount;
    setAmount(convertedamount);
    setconvertedamount(tempAmount);
  };

  const convert = () => {
    setconvertedamount(Amount * CurrencyInfo[To]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-psd/money-illustration-isolated_23-2151568514.jpg')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <Inputbox
                  label="From"
                  Amount={Amount}
                  CurrencyOptions={options}
                  onCurrencychange={(currency) => setfrom(currency)}
                  selectCurrency={from}
                  onAmountchange={(Amount) => setAmount(Amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <Inputbox
                  label="To"
                  Amount={convertedamount}
                  CurrencyOptions={options}
                  onCurrencychange={(currency) => setTo(currency)}
                  selectCurrency={To}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from} to {To}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

```


