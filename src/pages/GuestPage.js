import React from 'react'
import { useSelector } from 'react-redux'
import { NavBar } from 'lib/NavBar'
import { GuestList } from 'components/GuestList'
import { Wrapper, Headline } from 'lib/StyledComps'
import { ConfirmDeleteGuest } from 'components/ConfirmDeleteGuest'
import { ConfirmEditGuest } from 'components/ConfirmEditGuest'
import wallpaperL from 'assets/images/couple-hills-2500.jpg'
import wallpaperS from 'assets/images/couple-hills-1100.jpg'

export const GuestPage = () => {

  const guest = useSelector(state => state.guests.guest)

  return (
    <Wrapper backgroundSmall={wallpaperS} backgroundLarge={wallpaperL}>
      <NavBar navA='Back to home' navB='Admin' navC='To dos' navD='Guest list' linkB='admin' linkC='todos' linkD='guests' />
      <Headline>Guests so far.</Headline>
      <GuestList />
      {guest && <ConfirmDeleteGuest />}
      {guest && <ConfirmEditGuest />}
    </Wrapper>
  )

}