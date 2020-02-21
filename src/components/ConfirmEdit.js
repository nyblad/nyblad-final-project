import React from 'react'
import styled from 'styled-components/macro'
import { ui } from 'reducers/ui'
import { updateGuests } from 'reducers/guests'
import { useDispatch, useSelector } from 'react-redux'
import { FixedWrapper, TextWhite } from 'lib/StyledComps'


const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const ButtonSmall = styled.button`
  width: 60px;
  font-family: 'Open Sans', sans-serif;
  height: 45px;
  border: 3px solid #fff;
  border-radius: 6px;
  background: rgba(0,0,0, 0.2);
  transition: 0.6s;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: rgba(0,0,0, 0.6);
  }
  &:focus {
    outline-color: #BC7C43;
    outline-offset: 5px;
  }
  @media (min-width: 450px) {
    font-size: 16px;
  }
  @media (min-width: 992px) {
    font-size: 20px;
    padding: 0 15px;
  }
`

export const ConfirmEdit = () => {

  const dispatch = useDispatch()
  const open = useSelector(state => state.ui.isConfirmEditOpen)
  const guestId = useSelector(state => state.guests.guest)

  // Need to get GuestID from mapped guest in GuestList.js
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