import React from 'react'
import styled from 'styled-components/macro'
import { NavBar } from 'lib/NavBar'
import { Button } from 'lib/Buttons'
import { Wrapper, Headline, TextWhite } from 'lib/StyledComps'
import wallpaperL from 'assets/images/forest-2000.jpg'
import wallpaperS from 'assets/images/forest-1000.jpg'

const InnerWrapper = styled.section`
  padding: 10px;
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 668px) {
    flex-direction: row;
  }
`
const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 300px;
  padding: 20px;
  @media (min-width: 668px) {
    width: 40%;
  }
  @media (min-width: 992px) {
    width: 30%;
  }
`
const MapWrapper = styled.div`
  padding: 20px;
  width: 90%;
  overflow: hidden;
  background: none;
  @media (min-width: 668px) {
    width: 40%;
  }
  @media (min-width: 992px) {
    width: 30%;
  }
`
const Iframe = styled.iframe`
  width: 100%;
  height: 400px;
  margin: 0;
  border-radius: 6px;
`
const LinkWrap = styled.a`
  width: 100%;
`

export const LocationPage = () => {

  return (
    <Wrapper backgroundSmall={wallpaperS} backgroundLarge={wallpaperL}>
      <NavBar navA='Home' navB='Location' navC='Music' navD='RSVP' linkB='location' linkC='music' linkD='rsvp' />
      <Headline>Location location.</Headline>
      <InnerWrapper>
        <InfoWrapper>
          <TextWhite>The wedding will be in Bollnäs, Hälsingland. Here are accommodations we recommend if you need at place to stay over the night:</TextWhite>
          <Button title='Book Scandic Hotel' onClick={() => window.open('https://www.scandichotels.se/hotell/sverige/bollnas/scandic-bollnas?cmpid=ppc_BH2d&s_kwcid=AL!7589!3!291097966974!e!!g!!scandic%20bolln%C3%A4s&gclid=Cj0KCQiAnL7yBRD3ARIsAJp_oLbTYh0_awMgtqoqYMu8f773dfyGuCqZNQM1vHgBGptUx5xbPMPtxYcaAv-zEALw_wcB')} />
          <Button title='Book Orbaden Spa' onClick={() => window.open('https://www.orbaden.se')} />
        </InfoWrapper>
        <MapWrapper>
          <LinkWrap href='https://maps.google.com/maps?q=bolln%C3%A4s&t=&z=13&ie=UTF8&iwloc='>
            <Iframe src='https://maps.google.com/maps?q=bolln%C3%A4s&t=&z=13&ie=UTF8&iwloc=&output=embed' frameBorder='0' scrolling='no' />
          </LinkWrap>
        </MapWrapper>
      </InnerWrapper>
    </Wrapper>
  )

}

