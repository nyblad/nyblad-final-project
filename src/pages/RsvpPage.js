import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import wallpaperLarge from 'assets/couple-hills-2500.jpg'
import wallpaperSmall from 'assets/couple-hills-1100.jpg'
import { RsvpForm } from 'components/rsvpForm'
import { RsvpConfirm } from 'components/rsvpConfirm'

const Wrapper = styled.main`
  min-height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    padding: 20px;
  }
  @media (min-width: 992px) {
    padding: 30px;
  }
`

export const RsvpPage = () => {

  const submitted = useSelector(state => state.ui.isSubmitted)

  return (
    <Wrapper>
      {!submitted && <RsvpForm />}
      {submitted && <RsvpConfirm />}
    </Wrapper>
  )
}