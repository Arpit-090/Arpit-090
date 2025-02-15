import React from "react";
import {  useContext } from "react";
import userContext from "../Context/User";



function Profile(){
    const {user} = useContext(userContext)

  if(!user)  return <div> please log in </div>

  return(
    <>
    <div   className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     user logged in with name {user.username} whose password is {user.password} </div>
    </>
  )
}

export default Profile