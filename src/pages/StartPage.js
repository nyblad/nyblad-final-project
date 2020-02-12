import React from 'react'
import styled from 'styled-components/macro'
import wallpaperLarge from 'assets/couple-hills-2500.jpg'
import wallpaperSmall from 'assets/couple-hills-1100.jpg'
import coupleOne from 'assets/couple-1.jpg'
import coupleFour from 'assets/couple-4.jpg'
import { Button } from 'lib/Button'
import { Link } from 'react-router-dom'

const Wrapper = styled.main`

`
const Hero = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  /* min-height: 100vh; */
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
  color: #f1f1f1;
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
  color: #f1f1f1;
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
        <Headline>Celebrate with us.</Headline>
        <SecondaryText>Hälsingland | Fall 2022</SecondaryText>
        <Link to={'/guests'}>
          <Button title='See guestlist' />
        </Link>
        <Link to={'/rsvp'}>
          <Button title='RSVP' />
        </Link>
      </Hero>
      <SectionWhite>
        <Image src={coupleFour} alt="hands" />
        <Text>Date & place for the wedding day will be released soon.</Text>
        <Text>Ceremony | Dinner | Afterparty</Text>

      </SectionWhite>
      <SectionGray>
        <Image src={coupleOne} alt="couple" />
        <Text>Best wishes</Text>
        <Text>Sofie | Magnus</Text>
      </SectionGray>
    </Wrapper>
  )
}