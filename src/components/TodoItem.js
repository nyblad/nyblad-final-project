import React from 'react'
import styled from 'styled-components/macro'
// import { useSelector } from 'react-redux'

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
  background: ${props => (props.status ? "#1E2D2F" : "transparent")};
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
    display: ${props => (props.status ? "block" : "none")};
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
  color: ${props => (props.status ? "#d9d9d9" : "#333")};
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

export const TodoItem = ({ isCompleted, text, onClickToggle, onClickDelete }) => {

  // const status = useSelector(state => state.todos.items.isCompleted)

  return (
    <TodoWrapper>
      <Todo>
        <TodoToggleButton status={isCompleted} onClick={onClickToggle} />
        <TodoText status={isCompleted}>{text}</TodoText>
        <TodoRemoveButton onClick={onClickDelete} aria-label="remove">🗑</TodoRemoveButton>
      </Todo>
    </TodoWrapper>
  )

}
