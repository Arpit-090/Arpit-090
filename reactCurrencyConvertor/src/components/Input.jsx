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