import React from "react";
import { useState } from "react";
import userContext from "./User";


const UsercontextProvider =({children})=>{
 
    const [user , setuser] = useState(null)
    return(
<userContext.Provider value={{user,setuser}}> 

{children}

</userContext.Provider>
    )
}

export default UsercontextProvider