import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import wallpaperLarge from 'assets/couple-hills-2500.jpg'
import wallpaperSmall from 'assets/couple-hills-1100.jpg'
import coupleOne from 'assets/couple-1.jpg'
import coupleFour from 'assets/couple-4.jpg'
import { Button } from 'lib/Button'
import { NavBar } from 'components/NavBar'

const Wrapper = styled.main`

`
const Hero = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: url(${wallpaperSmall});
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 100vmax rgba(81, 57, 64, 0.4);
  @media (min-width: 450px) {
    background: url(${wallpaperLarge});
    background-size: cover;
    background-position: center;
  }
`
const HeroInner = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`
const SectionWhite = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`
const SectionGray = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background: #E8E3E3;
`
const Image = styled.img`
  width: 85%;
  border-radius: 50%;
  margin: 20px;
  @media (min-width: 450px) {
    width: 50%;
  }
  @media (min-width: 668px) {
    width: 25%;
  }
`
const Headline = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  @media (min-width: 450px) {
    font-size: 48px;
  }
  @media (min-width: 668px) {
    font-size: 56px;
  }
  @media (min-width: 992px) {
    font-size: 72px;
  }
`
const SecondaryText = styled.h3`
  margin: 0;
  color: #fff;
  @media (min-width: 450px) {
    font-size: 30px;
  }
  @media (min-width: 992px) {
    font-size: 36px;
  }
`
const Text = styled.h4`
  margin: 5px 0;
  color: #333;
  letter-spacing: 1.5px;
  text-align: center;
`

export const StartPage = () => {

  return (
    <Wrapper>
      <Hero>
        <NavBar />
        <HeroInner>
          <Headline>Celebrate with us.</Headline>
          <SecondaryText>Hälsingland | Fall 2022</SecondaryText>
          <Link to={'/rsvp'} tabIndex='-1'>
            <Button title='RSVP' />
          </Link>
        </HeroInner>
      </Hero>
      <SectionWhite>
        <Image src={coupleFour} alt="hands" />
        <Text>Date & place for the wedding day will be released soon.</Text>
        <Text>Ceremony | Dinner | Afterparty</Text>

      </SectionWhite>
      <SectionGray>
        <Image src={coupleOne} alt="couple" />
        <Text>with love</Text>
        <Text>Magnus | Sofie</Text>
      </SectionGray>
    </Wrapper>
  )
}