
import React from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  let todoArray= ['Learn React','Build a React app', 'Deploy the React app']
  
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <h2>Child Component</h2>
        {todoArray.map((item,ind)=>{
           return<TodoList todoItem = {item} key={ind}/>
        })
        }
    </div> 
  )
}

export default App
