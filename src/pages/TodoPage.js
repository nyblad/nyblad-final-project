import React from 'react'
import styled from 'styled-components/macro'
import { NavBarAdmin } from 'components/NavBarAdmin'
import { Wrapper, Headline, TextWhite } from 'lib/StyledComps'
import { TodoList } from 'components/TodoList'
import { TodoForm } from 'components/TodoForm'
// import { Button } from 'lib/Buttons'

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
      <NavBarAdmin />
      <Headline>Wedding planning.</Headline>
      <InnerWrapper>
        <TextWhite>Here you can plan your wedding by adding, check off or delete to dos with different categories.</TextWhite>
        <TodoForm />
        <TodoList />
      </InnerWrapper>
    </Wrapper >
  )

}