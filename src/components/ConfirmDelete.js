import React from 'react'
import styled from 'styled-components/macro'
import { ui } from 'reducers/ui'
import { deleteGuests } from 'reducers/guests'
import { useDispatch, useSelector } from 'react-redux'
import { FixedWrapper, TextWhite } from 'lib/StyledComps'
import { ButtonSmall } from 'lib/Buttons'

const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ConfirmDelete = () => {

  const dispatch = useDispatch()
  const open = useSelector(state => state.ui.isConfirmDeleteOpen)
  const guest = useSelector(state => state.guests.guest)

  const handleYes = () => {
    dispatch(deleteGuests(guest))
    dispatch(ui.actions.setConfirmDeleteOpen(false))
  }

  const handleNo = () => {
    dispatch(ui.actions.setConfirmDeleteOpen(false))
  }

  return (
    <>
      {open && (
        <FixedWrapper>
          <TextWhite>Are you sure you want to delete guest?</TextWhite>
          <ButtonWrapper>
            <ButtonSmall type='button' onClick={handleYes}>Yes</ButtonSmall>
            <ButtonSmall type='button' onClick={handleNo}>No</ButtonSmall>
          </ButtonWrapper>
        </FixedWrapper>
      )}
    </>
  )
}