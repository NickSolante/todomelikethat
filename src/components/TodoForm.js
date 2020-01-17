import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import AddTodo from './AddTodo'

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')
  const [lines, setLines] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  const addRow = () => {
    setLines(prevState => prevState + 1)
  }

  const rowAddition = () => {
    let rowItem = new Array()
    let rowling = addRow
    for (let i = 0; i <= lines; i++) {
      rowItem.push(<AddTodo></AddTodo>)
    }
    return rowItem
  }

  return (
    <form onSubmit={handleSubmit}>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId='formTask'>
              <Form.Control
                type='text'
                className='input'
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder=' Enter Task'
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>{rowAddition}</Row>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <Button variant='primary' onClick={addRow}>
          Add item
        </Button>
      </Form>
    </form>
  )
}

export default TodoForm
