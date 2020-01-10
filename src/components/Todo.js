import React from 'react'

const Todo = ({ todo, index, completeTodo, removeTodo }) => (
  <div
    className='todo'
    style={{
      textDecoration: todo.isCompleted ? 'line-through' : ''
    }}
  >
    {todo.text}

    <ul>
      <li>{todo.iType}</li>
      <li>{todo.qty}</li>
      <li>{todo.description}</li>
    </ul>

    <div>
      <button onClick={() => completeTodo(index)}>
        {todo.isCompleted ? 'Not Done' : 'Done'}{' '}
      </button>
      <button onClick={() => removeTodo(index)}>x</button>
    </div>
  </div>
)

export default Todo
