import React, { useState } from 'react'
import Todo from '../src/components/Todo'
import './App.css'
import TodoForm from './components/TodoForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Sidebar from './components/SideBar'

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'React Hooks in Depth',
      isCompleted: false,
      iType: 'item name ',
      qty: 2,
      description: 'the thing is the shit'
    },
    {
      text: 'Write Articles @ Medium',
      isCompleted: false,
      iType: 'item name ',
      qty: 2,
      description: 'the thing is the shit'
    },
    {
      text: 'Share article at Reddit',
      isCompleted: false,
      iType: 'item name ',
      qty: 2,
      description: 'the thing is the shit'
    }
  ])

  const items = [
    { name: 'home', label: 'Home' },
    {
      name: 'billing',
      label: 'Billing',
      items: [
        { name: 'statements', label: 'Statements' },
        { name: 'reports', label: 'Reports' }
      ]
    },
    {
      name: 'settings',
      label: 'Settings',
      items: [{ name: 'profile', label: 'Profile' }]
    }
  ]

  const addTodo = (text, iType, qty, description) => {
    const newTodos = [...todos, { text, iType, qty, description }]
    setTodos(newTodos)
    console.log(iType)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <Row>
        <Sidebar items={items} />
        <Col>
          <div className='todo-list'>
            <h1>Nunya </h1>
            {todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
            <TodoForm addTodo={addTodo} />
          </div>
        </Col>
        <Col>
          <div className='todo-list'>
            <h1>Nunya </h1>
            {todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
            <TodoForm addTodo={addTodo} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default App
