import React from "react";
import { useState , useContext } from "react";
import userContext from "../Context/User";
 
function Login(){
     const[username , setusernaame]= useState('')
     const[password , setpassword]= useState('') 
     const {setuser} = useContext(userContext)

     function handleSubmit(e){
        e.preventDefault()
        setuser({username,password})
     }

        return(
<>
<div> <h1 className="bg-red-500 p-4"> Log In </h1>
  <input type="text" placeholder="username" 
  value={username} 
   onChange={(e)=>{setusernaame(e.target.value)} }/>
  <input type="password" placeholder="password"
  value={password} 
  onChange={(e)=>{setpassword(e.target.value)}}  />

  <button
  onClick={handleSubmit}
  value="" > Submit </button>

</div>
</>
        )    
 }


 export default Login