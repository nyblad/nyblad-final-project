import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { ui } from 'reducers/ui'
import { TextWhite } from 'lib/StyledComps'

const ConfirmWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
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

export const ConfirmRsvp = () => {

  const dispatch = useDispatch()
  const open = useSelector(state => state.ui.isRsvpConfirmOpen)

  const close = () => {
    dispatch(ui.actions.setRsvpConfirmOpen(false))
  }


  return (
    <>
      {open && (
        <ConfirmWrapper>
          <TextWhite>Thank you & have a nice day!</TextWhite>
          <ButtonWrapper>
            <ButtonSmall type='button' onClick={close}>X</ButtonSmall>
          </ButtonWrapper>
        </ConfirmWrapper>
      )}
    </>
  )
}