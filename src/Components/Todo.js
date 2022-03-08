import React from 'react';


//this is a child to App function 
function Todo({ todo, toggleTodo }) {
  function handleTodoClick(){
    toggleTodo(todo.id)
  }
  return (
    <div>
      <lable>
        <input type="checkbox" checked={todo.complete} onChange= {handleTodoClick} />
      {todo.name}
      </lable>
    </div>
  )
}

export default Todo;

