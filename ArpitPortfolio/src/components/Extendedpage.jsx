import React from "react";
import { useParams } from "react-router-dom";
function User(){
    const{userid}= useParams()
    return(
        <>
        <h1> using id user can open his data and layout of page will be same</h1>
        <div> user:{userid}</div>
        </>
    )
}

export default User