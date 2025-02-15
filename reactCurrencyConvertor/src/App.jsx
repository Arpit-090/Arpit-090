// import React from "react";
// import Class from "./Class"
// import Inputbox from "./components/Input.jsx";
// import useCurrencyInfo from "./hooks/customhook.js";
// import { useState } from "react";


// // function appp(){
// //   return(
// //     <div>
// //       <h4>can inject html using fuctions</h4>
// //     </div>
// //   )
// // };
// ////////////////////// create element using react element ///////
// const Reactele = React.createElement(
//   'a',
//   {
//     href: 'https://google.com',
//     target:'_blank'
//   },
//   'click here to visit google'
// )

// function App() {
//   const [Amount ,setAmount] = useState(0)
//   const [from , setfrom] = useState("usd")
//   const [To , setTo] = useState("inr")
//   const [convertedamount , setconvertedamount]= useState()
//   const CurrencyInfo = useCurrencyInfo(from)
//   const options = Object.keys(CurrencyInfo)
//   const swap = function(){
//     setfrom(To)
//     setTo(from)
//     setconvertedamount(Amount)
//     setAmount(convertedamount)

//   }
// const convert = ()=>{
//   setconvertedamount(Amount *CurrencyInfo[To])
// }
//  const evaluatedVariable = "any evaluated js code ";

//   return (
//     <>
//       <div
//             className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//             style={{
//                 backgroundImage: `url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpaytm.com%2Fblog%2Fstock-market%2Fwhat-is-money-market-examples%2F&psig=AOvVaw1xz-i7EUjHuy9d96M9XbBF&ust=1737312484537000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMik-cH3_4oDFQAAAAAdAAAAABAE')`,
//             }}
//         >
//             <div className="w-full">
//                 <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//                     <form
//                         onSubmit={(e) => {
//                             e.preventDefault();
//                             convert()
                           
//                         }}
//                     >
//                         <div className="w-full mb-1">
//                             <InputBox
//                                 label="From"
//                                 Amount={Amount}
//                                 CurrencyOptions={options}
//                                 onCurrencychange={(currency)=>
//                                   setAmount(Amount)
//                                 }
//                                 selectCurrency={from}
//                             />
//                         </div>
//                         <div className="relative w-full h-0.5">
//                             <button
//                                 type="button"
//                                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                                 onClick={swap}
//                             >
//                                 swap
//                             </button>
//                         </div>
//                         <div className="w-full mt-1 mb-4">
//                             <InputBox
//                             label="To"
//                             Amount={convertedamount}
//                             CurrencyOptions={options}
//                             onCurrencychange={(currency)=>
//                               setTo(currency)
//                             }
//                             selectCurrency={from}
                            
                               
                                
//                             />
//                         </div>
//                         <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                             Convert {from} to {To}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
     

//   {/* <h1 > HELLO I AM ARPIT KUMAR{evaluatedVariable}</h1>
//   <Class />
//   {Reactele}
//   <Inputbox/>
//   myappp() */}
 
//   </>
//   )
// }

// export default App
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