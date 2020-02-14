// Login link for admins
import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { Button } from 'lib/Button'

const Wrapper = styled.footer`
  margin-top: 50px;
  width: 100%;
  height: 100px;
  /* background: rgba(255,255,255, 0.5); */
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Footer = () => {

  return (
    <Wrapper>
      <Link to={'/guests'} tabIndex='-1'>
        <Button title='Log in to see guestlist' />
      </Link>
    </Wrapper>
  )
}