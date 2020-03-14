import React from 'react'
import styled from 'styled-components/macro'
import { NavBar } from 'lib/NavBar'
import { Wrapper, Headline } from 'lib/StyledComps'
import { TodoList } from 'components/TodoList'
import { TodoForm } from 'components/TodoForm'

const InnerWrapper = styled.section`
  padding: 10px;
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const TodoPage = () => {

  return (
    <Wrapper>
      <NavBar navA='Back to home' navB='Admin' navC='To dos' navD='Guest list' linkB='admin' linkC='todos' linkD='guests' />
      <Headline>Wedding planning.</Headline>
      <InnerWrapper>
        <TodoForm />
        <TodoList />
      </InnerWrapper>
    </Wrapper >
  )

}