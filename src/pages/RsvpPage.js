import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import wallpaperLarge from 'assets/couple-hills-2500.jpg'
import wallpaperSmall from 'assets/couple-hills-1100.jpg'
import { RsvpForm } from 'components/rsvpForm'
import { RsvpConfirm } from 'components/rsvpConfirm'
import { NavBar } from 'components/NavBar'

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

export const RsvpPage = () => {

  const submitted = useSelector(state => state.ui.isSubmitted)

  return (
    <Wrapper>
      <NavBar />
      {!submitted && <RsvpForm />}
      {submitted && <RsvpConfirm />}
    </Wrapper>
  )
}