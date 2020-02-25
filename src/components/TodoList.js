import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from 'reducers/todos'
import { TodoItem } from 'components/TodoItem'
import done from 'assets/done.png'

const TodosWrapper = styled.section`
  background: rgba(255,255,255, 0.4);
  margin: 15px 0;
  width: 90%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
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
const NoTodos = styled.div`
  font-size: 16px;
  color: #999;
  text-align: center;
  padding: 30px;
`
const NoTodosImg = styled.img`
  width: 50%;
  margin: 0 auto;
`

export const TodoList = () => {
  const dispatch = useDispatch()
  const allTodos = useSelector(state => state.todos.items)
  console.log(allTodos)
  const todosCompleted = allTodos.filter(todo => (todo.isCompleted === true))
  const todosNotCompleted = allTodos.filter(todo => (todo.isCompleted === false))

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <TodosWrapper>
      {allTodos.length === 0 &&
        <>
          <NoTodos>Yay - you don't have any todos!</NoTodos>
          <NoTodosImg src={done} alt='No todos' />
        </>
      }

      {todosNotCompleted.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      {todosCompleted.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodosWrapper>
  )

}