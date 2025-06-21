import React, { useState } from 'react'

const TodoList = (props) => {
  const [display,setDisplay] = useState(true)
  const handleComplete = ()=>{
    setDisplay(false)
  }
  return (
    <>
  
          {props.todoItem} {display && <button onClick={handleComplete}> Complete</button>}
    </>
  )
}

export default TodoList