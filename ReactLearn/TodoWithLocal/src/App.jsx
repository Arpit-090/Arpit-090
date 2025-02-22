import React from 'react'
import { useState , useEffect} from 'react'
import {  Todocontext, Usetodo, TodoProvoder } from './Context/TodoContext'

import './App.css'
import TodoForm from './components/Form'
import TodoItem from './components/Todoitems'

function App() {
 const [todos , settodos] = useState([])

 const addTodo = (todo) =>{
settodos((prev)=>[ {id:Date.now(), ...todo },  ...prev ])
 }

 const updateTodo = ( id , todo)=> {

    settodos((prev)=> prev.map((prevtodo) =>
        (prevtodo.id == id ? todo : prevtodo)
    ))
 }

 const deleteTodo = (id)=> {
    settodos((prev) => (prev.filter((todo)=>todo.id !== id)))
 }

 const completeTodo = (id)=>{
settodos((prev) => 
prev.map((prevval)=>
( prevval.id === id ? { ...prev , completed : !prev.completed} :prev)))
 }
  useEffect(()=>{
    const storedtodos =JSON.parse(localStorage.getItem("todos"))
   if(storedtodos)  settodos(storedtodos)
    // localStorage.setItem(todos)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos" , JSON.stringify(todos))
  })
  return (
    <>
    <TodoProvoder value={{todos, addTodo ,
         deleteTodo , updateTodo , completeTodo}}> 

<h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>

  <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md 
                rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center 
                    mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        < TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                   {todos.map((todo) =>(
                        <div key = {todo.id} className='w-full'>

                          <TodoItem  todo={todo}/>

                        </div> ))}

                    </div>
                </div>
            </div>
</ TodoProvoder >
</>
  )
}

export default App
