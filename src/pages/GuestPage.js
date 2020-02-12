import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { GuestList } from 'components/GuestList'
import wallpaperLarge from 'assets/couple-hills-2500.jpg'
import wallpaperSmall from 'assets/couple-hills-1100.jpg'

const Wrapper = styled.section`
  padding: 10px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const GuestPage = () => {

  return (
    <Wrapper>
      <GuestList />
    </Wrapper>
  )

}