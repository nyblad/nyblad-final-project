// DELETE THIS COMPONENT LATER

import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'lib/Buttons'
import { ui } from 'reducers/ui'
import { TextDark } from 'lib/StyledComps'

const ConfirmWrapper = styled.section`
  width: 100%;
  height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgba(255,255,255, 0.5);
  border-radius: 6px;
  @media (min-width: 668px) {
    width: 80%;
  }
  @media (min-width: 800px) {
    width: 60%;
  }
  @media (min-width: 992px) {
    width: 40%;
  }
`

export const RsvpConfirm = () => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(ui.actions.setSubmitted(false))
  }

  return (
    <ConfirmWrapper>
      <TextDark>Thank you.</TextDark>
      <TextDark>Hope we see you at the ceremony!</TextDark>
      <Link to={'/rsvp'}>
        <Button title='RSVP for another guest?' onClick={handleClick} />
      </Link>
    </ConfirmWrapper>
  )

}