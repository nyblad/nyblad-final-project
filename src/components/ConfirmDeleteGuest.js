import React from 'react'
import styled from 'styled-components/macro'
import { ui } from 'reducers/ui'
import { deleteGuests } from 'reducers/guests'
import { useDispatch, useSelector } from 'react-redux'
import { FixedWrapper, TextWhite } from 'lib/StyledComps'
import { Button } from 'lib/Buttons'

const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ConfirmDeleteGuest = () => {

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
            <Button type='button' title='Yes' onClick={handleYes} />
            <Button type='button' title='No' onClick={handleNo} />
          </ButtonWrapper>
        </FixedWrapper>
      )}
    </>
  )
}