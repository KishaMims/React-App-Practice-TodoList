import './App.css';
import react, { useState, useRef, useEffect } from 'react';
import TodoList from "./Components/Todolist"
import { v4 as uuidv4 } from 'uuid';
import TodoTitle from './Components/TodoTitle';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // uuid creates unique id keys 
  // in usestate the deault is an empty array because there are no todos yet
 const [todos, SetTodos] = useState([]);
 const todoNameref = useRef()
 // the first todo is all the todos, and the next is 
 // the function to update those todos
 const [word, setWord] = useState('Todo List')
// updating state of parent with usestate state starts as Todo List

 useEffect(()=> {
  const storedTodos = JSON.parse(localStorage.getItem
  (LOCAL_STORAGE_KEY))
  if (storedTodos) SetTodos(storedTodos)
 }, [])

 useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
 }, [todos])


 function toggleTodo(id){
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  SetTodos(newTodos)
}

 function handleAddTodo(e){
   const name = todoNameref.current.value
   if(name === '')return
    SetTodos(prevTodos => {
return [...prevTodos, { id: uuidv4(), name : name, complete: false
    }]
 })
    todoNameref.current.value = null
 }

 function handleClearTodos(){
   const newTodos = todos.filter(todo => !todo.complete)
   SetTodos(newTodos);
 }
  return (
    <>
    <div className='child'>
      <h1>{word}</h1>
      {/*  child component for list title*/}
      <TodoTitle
       changeWord={word => setWord(word)}/>
        {/* setting function as prop in list tiltel child component*/}
      </div>
    <TodoList todos={todos} toggleTodo = {toggleTodo} /> 
      {/* child component for todolist */}
    <input ref={todoNameref} type="text" />
    
    <button onClick={ handleAddTodo }>Add Todo</button>
    <button onClick={ handleClearTodos}>Clear Complete</button>
    <div>{todos.filter(todo => !todo.complete).length} Left To Do</div>
    </>
  )
}

export default App;
//fragment <> </> let's your reuturn one thing the fragment and the 
//two things inside todolist and input
// react manages state and when it changes it rerenders its for us
// we want to monitor todo state
// in usestate the deault is an empty array because there are no todos yet
