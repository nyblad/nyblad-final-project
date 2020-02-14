import React from 'react'
import styled from 'styled-components/macro'
import { NavBar } from 'components/NavBar'
import { GuestList } from 'components/GuestList'
import wallpaperLarge from 'assets/couple-hills-2500.jpg'
import wallpaperSmall from 'assets/couple-hills-1100.jpg'

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 60px;
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

export const GuestPage = () => {

  return (
    <Wrapper>
      <NavBar />
      <GuestList />
    </Wrapper>
  )

}