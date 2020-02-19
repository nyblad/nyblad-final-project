import React from 'react'
import { RsvpForm } from 'components/rsvpForm'
import { NavBar } from 'components/NavBar'
import { ConfirmRsvp } from 'components/ConfirmRsvp'
import { Wrapper, Headline } from 'lib/StyledComps'

export const RsvpPage = () => {

  return (
    <Wrapper>
      <NavBar />
      <Headline>Looking forward to see you.</Headline>
      <RsvpForm />
      <ConfirmRsvp />
    </Wrapper>
  )
}