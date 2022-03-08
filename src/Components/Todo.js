import React from 'react';

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

