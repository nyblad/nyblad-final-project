import React from 'react'
import styled from 'styled-components/macro'
import { NavBar } from 'lib/NavBar'
import { Wrapper, Headline, TextWhite } from 'lib/StyledComps'
import wallpaperL from 'assets/images/music-2500.jpg'
import wallpaperS from 'assets/images/music-1100.jpg'

const Iframe = styled.iframe`
  margin-top: 20px;
  width: 90%;
  height: 400px;
  border-radius: 6px;
  @media (min-width: 668px) {
    width: 50%;
  }
`

export const MusicPage = () => {

  return (
    <Wrapper backgroundSmall={wallpaperS} backgroundLarge={wallpaperL}>
      <NavBar navA='Home' navB='Location' navC='Music' navD='RSVP' linkB='location' linkC='music' linkD='rsvp' />
      <Headline>Music for the party.</Headline>
      <TextWhite>Want to add your favourite song to our playlist? Open the playlist in your Spotify app and shoot!</TextWhite>
      <Iframe src='<iframe src="https://open.spotify.com/embed/playlist/0apQ3bEyP40EbJqBAR4dB9" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>' frameBorder='0' allowtransparency='true' allow='encrypted-media' />
    </Wrapper>
  )
}
