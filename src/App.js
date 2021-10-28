import './App.css';
import Newtodo from './components/NewTodo';
import { useState } from 'react';
import Todo from './components/Todo';

function App() {

  const [todos, setTodos] = useState([])

  const addTask = (newTask) => {
    if(newTask) {
      const newItem = {
        id: Math.floor(Math.random() * 100),
        task: newTask,
        completed: false
      }
      setTodos([...todos, newItem])
    }
  }

  const deleteTask = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  const toggleCompleted = (id) => {
    setTodos([
      ...todos.map(todo => 
          todo.id === id ? {...todo, completed: !todo.completed} : {...todo}
        )
    ])
  }

  const showTodo = todos.map(todo => 
    <Todo 
      key={todo.id}
      todo={todo}
      toggleCompleted={toggleCompleted}
      deleteTask={deleteTask}
    />
  )

  return (
    <div className="App">
      <h2> Todo List</h2>
      <Newtodo addTask={addTask}/>
      {showTodo}
    </div>
  );
}

export default App;
