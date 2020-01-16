import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export const AddTodo = () => {
  const [iType, setItype] = useState('')
  const [qty, setQty] = useState('')
  const [description, setDescription] = useState('')
  return (
    <div>
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
    </div>
  )
}

export default AddTodo
