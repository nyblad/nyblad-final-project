import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { ui } from 'reducers/ui'
import { ButtonSmall } from 'lib/Buttons'
import { FixedWrapper, TextWhite } from 'lib/StyledComps'
import { deleteGuests } from 'reducers/guests'

const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ConfirmDelete = () => {

  const dispatch = useDispatch()
  const open = useSelector(state => state.ui.isConfirmOpen)

  const handleYes = (guestId) => {
    dispatch(deleteGuests(guestId))
    dispatch(ui.actions.setConfirmOpen(false))
  }

  const handleNo = () => {
    dispatch(ui.actions.setConfirmOpen(false))
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