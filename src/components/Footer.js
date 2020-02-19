import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ui } from 'reducers/ui'
import { ButtonNarrow } from 'lib/Buttons'
import { TextWhite, TextWhiteBold, LinkTextWhite } from 'lib/StyledComps'

const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  padding: 60px 45px 40px 45px;
  background: #1E2D2F;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 668px) {
    flex-direction: row;
  }
`
const InnerWrapperText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`
const InnerWrapperButtons = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  @media (min-width: 668px) {
    flex-direction: column;
    padding: 0;
  }
`
const Circle = styled.div`
  align-self: center;
  position: absolute;
  top: -30px;
  left: 47%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #B2621C;
  color: #fff;
  font-size: 10px;
`
const CircleSpan = styled.span`
  position: relative;
  top: 20px;
  left: 8px;
`

export const Footer = () => {

  const dispatch = useDispatch()

  const openLoginForm = () => {
    dispatch(ui.actions.setLoginOpen(true))
    // Check auth on user
    // Send user to page guestlist
  }

  return (
    // Button to guestlist should only be displayed when logged in
    // Login should redirect you to guestlist
    // Login button should change title to log out when logged in
    <Wrapper>
      <Circle><CircleSpan>with love.</CircleSpan></Circle>
      <InnerWrapperText>
        <TextWhiteBold>Do you have any questions?</TextWhiteBold>
        <LinkTextWhite href='mailto:nyblad@hotmail.com'>nyblad@hotmail.com</LinkTextWhite>
        <TextWhite>070-526 48 20</TextWhite>
      </InnerWrapperText>
      <InnerWrapperButtons>
        <ButtonNarrow onClick={openLoginForm}>Admin log in</ButtonNarrow>
        <Link to={'/guests'} tabIndex='-1'>
          <ButtonNarrow>See guestlist</ButtonNarrow>
        </Link>
      </InnerWrapperButtons>
    </Wrapper>
  )
}