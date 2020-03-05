import React from 'react'
import { useSelector } from 'react-redux'
import { NavBarAdmin } from 'components/NavBarAdmin'
import { GuestList } from 'components/GuestList'
import { Wrapper, Headline } from 'lib/StyledComps'
import { ConfirmDeleteGuest } from 'components/ConfirmDeleteGuest'
import { ConfirmEditGuest } from 'components/ConfirmEditGuest'

export const GuestPage = () => {

  const guest = useSelector(state => state.guests.guest)

  return (
    <Wrapper>
      <NavBarAdmin />
      <Headline>Guests so far.</Headline>
      <GuestList />
      {guest && <ConfirmDeleteGuest />}
      {guest && <ConfirmEditGuest />}
    </Wrapper>
  )

}