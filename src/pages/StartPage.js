import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { NavBar } from 'lib/NavBar'
import { Button } from 'lib/Buttons'
import { Headline, SecondaryText, TextDark, LinkText } from 'lib/StyledComps'
import wallpaperL from 'assets/images/couple-hills-2500.jpg'
import wallpaperS from 'assets/images/couple-hills-1100.jpg'
import coupleOne from 'assets/images/couple-1.jpg'
import coupleFour from 'assets/images/couple-4.jpg'
import arrow from 'assets/icons/arrow-gold-16.png'

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: url(${wallpaperS});
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 100vmax rgba(81, 57, 64, 0.4);
  @media (min-width: 450px) {
    background: url(${wallpaperL});
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
  padding: 50px 30px;
  @media (min-width: 668px) {
    padding: 50px;
  }
`
const SectionGray = styled(SectionWhite)`
  background: #E8E3E3;
`
const Image = styled.img`
  width: 85%;
  border-radius: 50%;
  margin: 20px;
  filter: sepia(20%);
  @media (min-width: 450px) {
    width: 50%;
  }
  @media (min-width: 668px) {
    width: 25%;
  }
`
const Span = styled.span`
  position: relative;
  top: 3px;
`
const Arrow = styled.img`
  width: 16px;
  height: 16px;
`

export const StartPage = () => {

  return (
    <>
      <Hero>
        <NavBar navA='Home' navB='Location' navC='Music' navD='RSVP' linkB='location' linkC='music' linkD='rsvp' />
        <HeroInner>
          <Headline>Celebrate with us.</Headline>
          <SecondaryText>Hälsingland | Fall 2022</SecondaryText>
          <Link to={'/rsvp'} tabIndex='-1'>
            <Button title='RSVP' width='200px' />
          </Link>
        </HeroInner>
      </Hero>
      <SectionWhite>
        <Image src={coupleFour} alt='hands' />
        <TextDark>date & place for the wedding day will be released soon.</TextDark>
        <Link to={'/location'}>
          <LinkText>View map <Span><Arrow src={arrow} alt='arrow' /></Span></LinkText>
        </Link>
        <TextDark>Ceremony | Dinner | Afterparty</TextDark>

      </SectionWhite>
      <SectionGray>
        <Image src={coupleOne} alt='couple' />
        <TextDark>with love.</TextDark>
        <TextDark>Magnus | Sofie</TextDark>
      </SectionGray>
    </>
  )
}