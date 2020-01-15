import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value, iType, qty, description)
    setValue('')
    setItype('')
    setQty('')
    setDescription('')
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

        <Row>
          <Col>
            <Form.Group controlId='formQty'>
              <Form.Control
                type='number'
                value={qty}
                className='input'
                onChange={e => setQty(e.target.value)}
                placeholder='Qty'
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='formDescription'>
              <Form.Control
                type='text'
                value={description}
                className='input'
                onChange={e => setDescription(e.target.value)}
                placeholder='Description'
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='formName'>
              <Form.Control
                type='text'
                className='input'
                value={iType}
                onChange={e => setItype(e.target.value)}
                placeholder=' Type'
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <Button variant='primary' onClick={}>
          Submit
        </Button>
      </Form>
    </form>
  )
}

export default TodoForm
