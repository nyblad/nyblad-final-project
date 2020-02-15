import React from 'react'
import { NavBar } from 'components/NavBar'
import { GuestList } from 'components/GuestList'
import { Wrapper, Headline } from 'lib/StyledComps'

export const GuestPage = () => {

  return (
    <Wrapper>
      <NavBar />
      <Headline>Guests so far.</Headline>
      <GuestList />
    </Wrapper>
  )

}