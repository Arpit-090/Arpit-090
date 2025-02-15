import React from "react";
import { useState,useEffect } from "react";



function Github(){
    const [data , setdata]= useState([])

useEffect( ()=>{
    fetch('https://api.github.com/users/Arpit-090')
    .then(response=> response.json())
    .then(data=>{setdata(data)})
},[])
    return (

        <>
        <div className=" text-orange-500 p-4 text-3xl ">
            {/* all  data {  {data.forEach(()=>{data[0]}) }} */}
          The username is:{data.login}
          <br/>
          
          <img className="m-20" src={data.avatar_url}/>
          

        </div>
       </> 
    )
}


export default Github