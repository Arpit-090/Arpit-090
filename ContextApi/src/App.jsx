
import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import { Themeprovider } from './Context/Theme'
import UsercontextProvider from './Context/UserContextProvider'
import Themebtn from './components/Themebtn'
import Card from './components/Card'

function App() {
    const [theme , settheme] = useState("dark")


  useEffect(()=>{
       const Hometheme= document.querySelector('html')
       Hometheme.classList.remove("light" , "dark")
       Hometheme.classList.add(theme)
 
  },)

  

  const darkmode = ()=>{
      settheme("dark")
  }

  const lightmode = ()=>{
      settheme("light")
  }


  return (
    <Themeprovider value={{theme , darkmode , lightmode}}>
    <UsercontextProvider>
     <Login />
     <Profile />
    </UsercontextProvider>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebtn />
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                    <Card />
                    </div>
                </div>
            </div>
    </Themeprovider>
  )
}

export default App
