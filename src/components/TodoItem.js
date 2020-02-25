import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

const TodoWrapper = styled.section`
  display: flex;
  flex-direction: column;
`
const Todo = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 10px;
  border-bottom: 1px solid #333;
`
const TodoToggleButton = styled.button`
  background: ${props => (props.todoStatus ? "#1E2D2F" : "transparent")};
  color: #1E2D2F;
  border: 2px solid #1E2D2F;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  height: 20px;
  width: 20px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
  &:after {
    content: '';
    display: ${props => (props.todoStatus ? "block" : "none")};
    /*Create white L-shape turned 45 degrees*/
    width: 3px;
    height: 6px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`
const TodoText = styled.article`
  font-size: 16px;
  overflow-wrap: break-word;
  word-break: break-word;
  color: ${props => (props.todoStatus ? "#d9d9d9" : "#333")};
`
const TodoRemoveButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`

export const TodoItem = (props) => {
  // Instead of props we can use {todo}
  const dispatch = useDispatch()
  const todoStatus = props.todo.completed

  const handleToggleTodo = () => {
    dispatch(todos.actions.toggleTodo(props.todo.id))
  }

  const handleRemoveTodo = () => {
    dispatch(todos.actions.removeTodo(props.todo.id))
  }

  return (
    <TodoWrapper>
      <Todo>
        <TodoToggleButton todoStatus={todoStatus} onClick={handleToggleTodo} />
        <TodoText todoStatus={todoStatus}>{props.todo.text}</TodoText>
        <TodoRemoveButton onClick={handleRemoveTodo} aria-label="remove">🗑</TodoRemoveButton>
      </Todo>
    </TodoWrapper>
  )

}
