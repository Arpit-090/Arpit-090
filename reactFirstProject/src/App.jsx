import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { use } from 'react'

function App() {
   let  [count, setCount] = useState(15) 
  // let count = 6;
  
    const addValue = ()=>{
      count = count +1
      if(count <= 20){
      setCount(count)
      }
      console.log(count)
    }

    const decValue = ()=>{
      count = count-1
      if(count >= 0)
      setCount(count)
    }
    return (
    <>
    <div className="bg-blue-500 text-white p-4">
  Hello, Tailwind!
</div>
    <h1 className='bg-green-400'>React COUNTER Project</h1>
    <h2>count :{count} </h2>
    <button   onClick = {addValue} id='up'>add one</button>
    <br/>
    <button  onClick={decValue} id='down'>decrease one</button>
    <p> the value updated is:{count}</p>
    </>
  )
}

export default App
