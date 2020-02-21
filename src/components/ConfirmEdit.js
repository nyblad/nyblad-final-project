import React from 'react'
import styled from 'styled-components/macro'
import { ui } from 'reducers/ui'
import { updateGuests } from 'reducers/guests'
import { useDispatch, useSelector } from 'react-redux'
import { FixedWrapper, TextWhite } from 'lib/StyledComps'
import { ButtonSmall } from 'lib/Buttons'

const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ConfirmEdit = () => {

  const dispatch = useDispatch()
  const open = useSelector(state => state.ui.isConfirmEditOpen)
  const guestId = useSelector(state => state.guests.guest)

  const handleYes = () => {
    dispatch(updateGuests(guestId))
    dispatch(ui.actions.setConfirmEditOpen(false))
  }

  const handleNo = () => {
    dispatch(ui.actions.setConfirmEditOpen(false))
  }

  return (
    <>
      {open && (
        <FixedWrapper>
          <TextWhite>Are you sure you want update status on guest?</TextWhite>
          <ButtonWrapper>
            <ButtonSmall type='button' onClick={handleYes}>Yes</ButtonSmall>
            <ButtonSmall type='button' onClick={handleNo}>No</ButtonSmall>
          </ButtonWrapper>
        </FixedWrapper>
      )}
    </>
  )
}