import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { Button } from 'lib/Button'
import { ui } from 'reducers/ui'

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

  const dispatch = useDispatch()

  const openLoginForm = () => {
    dispatch(ui.actions.setOpen(true))
    // Check auth on user
    // Send user to page guestlist
  }

  return (
    <Wrapper>
      <Link to={'/guests'} tabIndex='-1'>
        <Button title='Guestlist' />
      </Link>
      <Button title='Log in' onClick={openLoginForm} />
    </Wrapper>
  )
}