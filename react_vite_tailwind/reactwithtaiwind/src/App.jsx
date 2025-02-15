 import { useState ,useCallback ,useEffect ,useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import './index.css'

function App() {
   const [length, setlength] = useState(10) 
   const [numAllow , setnumAllow]= useState(false) 
   const [charAllow , setcharAllow]= useState(false)
   const [password , setpassword] = useState("")
   
   const passwordgenerator = useCallback(()=>{
    let pass = ""
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    if(numAllow) str +="0123456789"
    if(charAllow) str +=",.?;':[]{}-=_+!@#$%^&*" 

    for( let i=0 ; i<length ; i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass  += str.charAt(char)
    }
    setpassword(pass)
   },[length , setnumAllow , setcharAllow , setpassword])

useEffect(()=>{
passwordgenerator()

},[length , setnumAllow , setcharAllow , setpassword])

const copyPasswordToclipboard = useCallback(()=>{
  passwordref.current?.select()
window.navigator.clipboard.writeText(password)

},[password])

const passwordref = useRef(null)
  return (
    <>

      <div className="bg-blue-500 text-white p-4">
  Hello, Tailwind!
</div>
<h1 className="rounded bg-slate-400 text-3xl font-bold underline text-white">
      Hello world!
    </h1>
    <h1>arpit</h1>
    <br/>
     
    <div className='bg-slate-800 w-full m-5 rounded-lg text-white '>
    <h1 className='text-white'>password generator</h1>
    <div className=''>
      <input className='text-black' 
      type='text' value={password} placeholder='password'
      ref={passwordref} readOnly/>
      <button className='bg-blue-400 rounded-lg' 
      onClick={copyPasswordToclipboard}
      >copy</button>
 
      </div>
      <div>
        <div>
          <input type='range' min={5} max={50} value={length}
          onChange={(e)=>{setlength(e.target.value)}}/>
          <label>length:{length}</label>
       
      </div>
      <div>
        <input type='checkbox' defaultChecked={numAllow} 
        onChange={()=>{setnumAllow ((prev) => !prev) ; }
  } />
  <label>Numbers</label>

  <input className='mx-8' type='checkbox' defaultChecked={charAllow} 
        onChange={()=>{setcharAllow ((prev) => !prev) ; }
  } />
  <label>Characters</label>
      </div>
      </div> 
     </div> 
     
      
    </>
  )
}

export default App
