import React from 'react'
import { NavBarAdmin } from 'components/NavBarAdmin'
import { GuestList } from 'components/GuestList'
import { Wrapper, Headline } from 'lib/StyledComps'
import { ConfirmDelete } from 'components/ConfirmDelete'
import { ConfirmEdit } from 'components/ConfirmEdit'

export const GuestPage = () => {

  return (
    <Wrapper>
      <NavBarAdmin />
      <Headline>Guests so far.</Headline>
      <GuestList />
      <ConfirmDelete />
      <ConfirmEdit />
    </Wrapper>
  )

}