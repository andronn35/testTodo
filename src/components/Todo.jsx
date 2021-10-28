import React from 'react';

const Todo = ({ todo, deleteTask, toggleCompleted }) => {
  return (
    <div className="one-task">
      <div 
        className={todo.completed ? 'task-text completed' : 'task-text'}
        onClick={() => toggleCompleted(todo.id)}
      >
        {todo.task}
      </div>
      <div className='delete' onClick={() => deleteTask(todo.id)} >
        X
      </div>
    </div>
  );
}

export default Todo;
