import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ui } from 'reducers/ui'
import { users } from 'reducers/users'
import { Button } from 'lib/Buttons'
import { TextWhite, TextWhiteBold, LinkTextWhite } from 'lib/StyledComps'

const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  background: #1E2D2F;
  display: flex;
  flex-direction: column;
`
const InnerWrapper = styled.section`
  padding: 60px 30px 40px 30px;
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 668px) {
    padding: 60px 45px 40px 45px;
    flex-direction: row;
    text-align: left;
  }
`
const InnerWrapperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`
const InnerWrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
  margin-top: 20px;
  width: 100%;
  @media (min-width: 668px) {
    flex-direction: column;
    width: 30%;
    margin-top: 0;
  }
`
const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Circle = styled.div`
  align-self: center;
  position: absolute;
  top: -30px;
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
  const history = useHistory()

  const accessToken = useSelector(state => state.users.accessToken)
  const userName = useSelector(state => state.users.userName)

  const openLoginForm = () => {
    dispatch(ui.actions.setLoginOpen(true))
  }

  const handleLogout = () => {
    dispatch(users.actions.removeAccessToken(accessToken))
    dispatch(users.actions.removeUserName(userName))
    history.push('/')
  }

  return (
    <Wrapper>
      <Circle><CircleSpan>with love.</CircleSpan></Circle>
      <InnerWrapper>
        <InnerWrapperText>
          <TextWhiteBold>Do you have any questions?</TextWhiteBold>
          <LinkTextWhite href='mailto:nyblad@hotmail.com'>nyblad@hotmail.com</LinkTextWhite>
          <TextWhite>070-526 48 20</TextWhite>
        </InnerWrapperText>
        <InnerWrapperButtons>
          {!accessToken && <Button onClick={openLoginForm} title='Admin login' width='90%' />}
          {accessToken && <Button onClick={handleLogout} title={`Log out ${userName}`} width='90%' />}
          {accessToken &&
            <StyledLink to={'/admin'} tabIndex='-1'>
              <Button title='Admin pages' fontSize='16px' width='90%' />
            </StyledLink>
          }
        </InnerWrapperButtons>
      </InnerWrapper>
    </Wrapper>
  )

}