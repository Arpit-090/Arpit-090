import { createContext , useContext } from "react";

export const Todocontext = createContext({
    todos: [
        {   
            id: "",
           todo: "" ,
           completed:false   
        }
        ],
        addTodo: (todo)=>{},
        deleteTodo: (id)=>{},
        updateTodo: (id , todo) =>{},
        completeTodo : (id) =>{}
})

export  const Usetodo = ()=>{
         return(
            useContext(Todocontext)
         )
}

export const TodoProvoder = Todocontext.Provider