import React, { useState } from 'react'

const TodoList = (props) => {
  const [display,setDisplay] = useState(true)
  const handleComplete = ()=>{
    setDisplay(false)
  }
  return (
    <>
      <div>
          <p>{props.todoItem} {display && <button onClick={handleComplete}> Complete</button>}</p>
      </div>
    </>
  )
}

export default TodoList