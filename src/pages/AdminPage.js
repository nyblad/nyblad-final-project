import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { NavBar } from 'lib/NavBar'
import { Wrapper, Headline, TextWhite } from 'lib/StyledComps'
import { Button } from 'lib/Buttons'
import wallpaperL from 'assets/images/couple-hills-2500.jpg'
import wallpaperS from 'assets/images/couple-hills-1100.jpg'

const ButtonWrapper = styled.section`
  margin: 30px 0;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px;
`

export const AdminPage = () => {

  const userName = useSelector(state => state.users.userName)

  return (
    <Wrapper backgroundSmall={wallpaperS} backgroundLarge={wallpaperL}>
      <NavBar navA='Back to home' navB='Admin' navC='To dos' navD='Guest list' linkB='admin' linkC='todos' linkD='guests' />
      <Headline>Hi {userName}!</Headline>
      <TextWhite>Here you can handle the list of guests that have responded and add to dos in your wedding planning.</TextWhite>
      <TextWhite>Stay calm and don't go wedding-bananas.</TextWhite>
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