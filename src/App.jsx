import React from 'react'
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';

import './App.css';

function App() {
  let todoItems = [
    {
      taskName: 'Morning Walk',
      dueDate: "24/10/2019"
    }, 
    {
      taskName: 'Breakfast',
      dueDate: "25/10/2019"
    }
  ]
  return (
    <center className='todo-container'>
     {/* {arr.length == 0 ? <h1>Data is empty</h1>: <h1>Data is Present</h1>} */}
      <AppName />
      <AddTodo />
      <TodoItems todoItemList={todoItems}/>
    </center>
  )
}
export default App