import React from 'react'
import { RsvpForm } from 'components/rsvpForm'
import { NavBar } from 'lib/NavBar'
import { ConfirmRsvp } from 'components/ConfirmRsvp'
import { Wrapper, Headline } from 'lib/StyledComps'
import wallpaperL from 'assets/images/nature-2500.jpg'
import wallpaperS from 'assets/images/nature-1000.jpg'

export const RsvpPage = () => {

  return (
    <Wrapper backgroundSmall={wallpaperS} backgroundLarge={wallpaperL}>
      <NavBar navA='Home' navB='Location' navC='Music' navD='RSVP' linkB='location' linkC='music' linkD='rsvp' />
      <Headline>Looking forward to see you.</Headline>
      <RsvpForm />
      <ConfirmRsvp />
    </Wrapper>
  )
}