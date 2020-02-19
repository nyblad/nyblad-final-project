import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { ui } from 'reducers/ui'
import { FixedWrapper, TextWhite } from 'lib/StyledComps'
import { ButtonSmall } from 'lib/Buttons'

const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ConfirmRsvp = () => {

  const dispatch = useDispatch()
  const open = useSelector(state => state.ui.isRsvpConfirmOpen)

  const close = () => {
    dispatch(ui.actions.setRsvpConfirmOpen(false))
  }


  return (
    <>
      {open && (
        <FixedWrapper>
          <TextWhite>Thank you & have a nice day!</TextWhite>
          <ButtonWrapper>
            <ButtonSmall type='button' onClick={close}>X</ButtonSmall>
          </ButtonWrapper>
        </FixedWrapper>
      )}
    </>
  )
}