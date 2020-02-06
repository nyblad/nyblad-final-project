import React from 'react'
import styled from 'styled-components/macro'
import wallpaperLarge from 'assets/couple-night.jpg'
import wallpaperSmall from 'assets/couple-night.jpg'
import { Button } from 'lib/Button'
import { Link } from 'react-router-dom'

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background: url(${wallpaperSmall});
  background-size: cover;
  background-position: center;
  @media (min-width: 450px) {
    background: url(${wallpaperLarge});
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
`
const SecondaryText = styled.h3`
  margin: 0;
  color: #f1f1f1;
  @media (min-width: 450px) {
    font-size: 30px;
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
      </InnerWrapper>
    </Wrapper>
  )
}