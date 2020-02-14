import React from 'react'
import styled from 'styled-components/macro'
import wallpaperLarge from 'assets/couple-hills-2500.jpg'
import wallpaperSmall from 'assets/couple-hills-1100.jpg'
import { NavBar } from 'components/NavBar'
import { Footer } from 'components/Footer'

const Wrapper = styled.main`
  padding-top: 60px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${wallpaperSmall});
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 100vmax rgba(81, 57, 64, 0.4);
  @media (min-width: 450px) {
    background: url(${wallpaperLarge});
    background-size: cover;
    background-position: center;
  }
  @media (min-width: 668px) {
    padding-top: 0;
  }
`
const InnerWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 668px) {
    flex-direction: row;
  }
`
const Text = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin: 0 0 20px 0;
`
const Iframe = styled.iframe`
  width: 90%;
  height: 400px;
  margin: 0;
  /* @media (min-width: 668px) {
    width: 90%;
  } */
`
const MapOuter = styled.div`
  position: relative;
  text-align: right;
`
const MapCanvas = styled.div`
  overflow: hidden;
  background: none;
`

export const LocationPage = () => {

  return (
    <Wrapper>
      <NavBar />
      <InnerWrapper>
        <Text>The wedding will be in Bollnäs, Hälsingland.</Text>
        <MapOuter>
          <MapCanvas>
            <Iframe src='https://maps.google.com/maps?q=bolln%C3%A4s&t=&z=13&ie=UTF8&iwloc=&output=embed' frameBorder='0' scrolling='no' />
            <a href='https://maps.google.com/maps?q=bolln%C3%A4s&t=&z=13&ie=UTF8&iwloc='>Map</a>
          </MapCanvas>
        </MapOuter>
      </InnerWrapper>
      <Footer />
    </Wrapper>
  )

}

