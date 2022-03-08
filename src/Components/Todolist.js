import React from 'react';
import Todo from './Todo.js';

// we need unique keys for props
//they key will only rerender the compoments that change
// instead of all of them 
//passting to propbs todos, toggle todo
// this is a child compoment to App 
function TodoList( { todos, toggleTodo }){
    return (
      todos.map(todo => {
          return <Todo key={todo.id} toggleTodo={ toggleTodo } todo={ todo } />
            /*looping over all the todos w/map and return a todo element*/

      })
    )
}

export default TodoList;