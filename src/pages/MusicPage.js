import React from 'react'
import styled from 'styled-components/macro'
import wallpaperLarge from 'assets/couple-hills-2500.jpg'
import wallpaperSmall from 'assets/couple-hills-1100.jpg'
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
const Text = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin: 0 0 20px 0;
`
const Iframe = styled.iframe`
  width: 90%;
  height: 400px;
  @media (min-width: 668px) {
    width: 50%;
  }
  @media (min-width: 992px) {
    height: 600px;
  }
`

export const MusicPage = () => {

  return (
    <Wrapper>
      <NavBar />
      <Text>Want to add your favourite song to our playlist? Open the playlist in your Spotify app and shoot!</Text>
      <Iframe src="https://open.spotify.com/embed/playlist/2WlD0nCuBif7ftksjMn9TL" frameBorder="0" allowtransparency="true" allow="encrypted-media" SameSite="none" />
    </Wrapper>
  )
}