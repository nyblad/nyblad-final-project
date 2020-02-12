import React from 'react'
import styled from 'styled-components/macro'
import wallpaperLarge from 'assets/couple-hills-2500.jpg'
import wallpaperSmall from 'assets/couple-hills-1100.jpg'
import { Button } from 'lib/Button'
import { Link } from 'react-router-dom'

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background: url(${wallpaperLarge});
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 100vmax rgba(81, 57, 64, 0.4);
  @media (min-width: 450px) {
    background: url(${wallpaperSmall});
    background-size: cover;
    background-position: center;
  }
`
const InnerWrapper = styled.section`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
const Headline = styled.h1`
  margin: 0;
  color: #f1f1f1;
  @media (min-width: 450px) {
    font-size: 36px;
  }
  @media (min-width: 992px) {
    font-size: 52px;
  }
`
const SecondaryText = styled.h3`
  margin: 0;
  color: #f1f1f1;
  @media (min-width: 450px) {
    font-size: 30px;
  }
  @media (min-width: 992px) {
    font-size: 36px;
  }
`

export const StartPage = () => {

  return (
    <Wrapper>
      <InnerWrapper>
        <Headline>The Nyblad Wedding</Headline>
        <SecondaryText>Hälsingland | Fall 2022</SecondaryText>
        <Link to={'/guests'}>
          <Button title='See guestlist' />
        </Link>
        <Link to={'/rsvp'}>
          <Button title='RSVP' />
        </Link>
      </InnerWrapper>
    </Wrapper>
  )
}