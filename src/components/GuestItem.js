import React from 'react'
import styled from 'styled-components'
// import { useDispatch } from 'react-redux'
import { guests } from 'reducers/guests'

const GuestWrapper = styled.div`
  width: 25%;
  /* height: 150px; */
  border: 1px solid #f1f1f1;
  border-radius: 6px;
  margin: 5px 0;
  padding: 5px;
`
const Text = styled.p`
  font-size: 14px;
`

export const GuestItem = ({ firstName, lastName, email, phone, allergies, other }) => {

  // const dispatch = useDispatch()

  // PREPARE FOR DELETING GUEST
  //const handleDeleteGuest = () => {
  //   dispatchEvent(guests.actions.deleteGuest(guest._id))
  // }

  // PREPARE FOR UPDATING GUEST
  //const handleUpdateGuest = () => {
  //   dispatchEvent(guests.actions.updateGuest(guest._id))
  // }

  return (
    <GuestWrapper>
      <Text>Name: {firstName} {lastName}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Allergies: {allergies}</Text>
      <Text>Other: {other}</Text>
    </GuestWrapper>
  )
}