import React from 'react'
import { NavBarAdmin } from 'components/NavBarAdmin'
import { GuestList } from 'components/GuestList'
import { Wrapper, Headline } from 'lib/StyledComps'
import { ConfirmDelete } from 'components/ConfirmDelete'
// import { ConfirmEdit } from 'components/ConfirmEdit'
import { ConfirmEditGuest } from 'components/ConfirmEditGuest'

export const GuestPage = () => {

  return (
    <Wrapper>
      <NavBarAdmin />
      <Headline>Guests so far.</Headline>
      <GuestList />
      <ConfirmDelete />
      {/* <ConfirmEdit /> */}
      <ConfirmEditGuest />

    </Wrapper>
  )

}