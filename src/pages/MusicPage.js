import React from 'react'
import styled from 'styled-components/macro'
import { NavBar } from 'components/NavBar'
import { Wrapper, Headline, TextWhite } from 'lib/StyledComps'

const Iframe = styled.iframe`
  margin-top: 20px;
  width: 90%;
  height: 400px;
  border-radius: 6px;
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
      <Headline>Music for the party.</Headline>
      <TextWhite>Want to add your favourite song to our playlist? Open the playlist in your Spotify app and shoot!</TextWhite>
      <Iframe src="https://open.spotify.com/embed/playlist/2WlD0nCuBif7ftksjMn9TL" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
    </Wrapper>
  )
}