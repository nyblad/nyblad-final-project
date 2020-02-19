import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ui } from 'reducers/ui'
import { ButtonNarrow } from 'lib/Buttons'
import { TextWhite, TextWhiteBold } from 'lib/StyledComps'

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
const InnerWrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    <Wrapper>
      <Circle><CircleSpan>with love.</CircleSpan></Circle>
      <InnerWrapperColumn>
        <TextWhiteBold>Do you have any questions?</TextWhiteBold>
        <TextWhite>nyblad@hotmail.com</TextWhite>
        <TextWhite>070-526 48 20</TextWhite>
      </InnerWrapperColumn>
      <InnerWrapperColumn>
        <Link to={'/guests'} tabIndex='-1'>
          <ButtonNarrow>Guestlist</ButtonNarrow>
        </Link>
        <ButtonNarrow onClick={openLoginForm}>Admin log in</ButtonNarrow>
      </InnerWrapperColumn>
    </Wrapper>
  )
}