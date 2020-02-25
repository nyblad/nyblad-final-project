import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
// import { Form, Input } from 'lib/FormStyles'

const StyledForm = styled.form`
  width: 90%;
  background: rgba(255,255,255, 0.4);
  height: 45px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 6px;
  @media (min-width: 668px) {
    width: 80%;
    padding: 20px 40px;
  }
  @media (min-width: 800px) {
    width: 60%;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
`
const AddButton = styled.button`
  background: transparent;
  color: #666;
  border: none;
  height: 20px;
  width: 20px;
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
`
const Input = styled.input`
  font-size: 16px;
  color: #666;
  border: none;
  background: transparent;
  padding: 5px 5px;
  margin: 5px 0;
  width: 90%;
  &:focus {
    outline-style: none;
    border-bottom: 1px dashed #666;
    color: #333;
  }
`

export const TodoForm = () => {

  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()

  const handleAddTodo = (event) => {
    event.preventDefault()
    dispatch(todos.actions.addTodo(newTodo))
    setNewTodo('')
  }

  return (
    <>
      <StyledForm onSubmit={handleAddTodo}>
        <AddButton type='submit' disabled={newTodo.length === 0}>+</AddButton>
        <Input
          type='text'
          required
          placeholder='Add todo'
          maxLength='100'
          onChange={(event) => setNewTodo(event.target.value)}
          value={newTodo}
        />
      </StyledForm>
    </>
  )

}