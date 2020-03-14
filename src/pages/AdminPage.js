// Maybe a summary of quantity of guests who has rsvp:d
import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { NavBar } from 'lib/NavBar'
import { Wrapper, Headline, TextWhite } from 'lib/StyledComps'
import { Button } from 'lib/Buttons'

const ButtonWrapper = styled.section`
  margin: 30px 0;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px;
`

export const AdminPage = () => {

  return (
    <Wrapper>
      <NavBar navA='Back to home' navB='Admin' navC='To dos' navD='Guest list' linkB='admin' linkC='todos' linkD='guests' />
      <Headline>Wedding admin.</Headline>
      <TextWhite>Here you can handle the list of guests that have responded and add to dos in your wedding planning.</TextWhite>
      <ButtonWrapper>
        <Link to={'/guests'} tabIndex='-1'>
          <Button title='Guest list' />
        </Link>
        <Link to={'/todos'} tabIndex='-1'>
          <Button title='Todo list' />
        </Link>
      </ButtonWrapper>
    </Wrapper >
  )

}