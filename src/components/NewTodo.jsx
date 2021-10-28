import React, { useState } from 'react';

const Newtodo = (props) => {

  const [todoValue, setTodoValue] = useState('')

  const handleChange = (e) => {
    setTodoValue(e.currentTarget.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    props.addTask(todoValue)
    setTodoValue('')
  }

  return (
    <form>
      <input 
        type="text"
        value={todoValue}
        onChange={handleChange}
      />
      <button type='submit' onClick={onSubmit}>ADD</button>
    </form>
  );
}

export default Newtodo;
