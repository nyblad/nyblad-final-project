import React from 'react'
import { useSelector } from 'react-redux'
import { RsvpForm } from 'components/rsvpForm'
import { RsvpConfirm } from 'components/rsvpConfirm'
import { NavBar } from 'components/NavBar'
import { Footer } from 'components/Footer'
import { Wrapper, Headline } from 'lib/StyledComps'

export const RsvpPage = () => {

  const submitted = useSelector(state => state.ui.isSubmitted)

  return (
    <Wrapper>
      <NavBar />
      <Headline>Looking forward to see you.</Headline>
      {!submitted && <RsvpForm />}
      {submitted && <RsvpConfirm />}
      <Footer />
    </Wrapper>
  )
}