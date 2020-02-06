import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGuests } from 'reducers/guests'
import { GuestItem } from 'components/GuestItem'

const Button = styled.button`
  height: 40px;
`
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

export const GuestList = () => {
  const dispatch = useDispatch()

  const guests = useSelector(state => state.guests.guests)

  return (
    <>

      <Button onClick={() => dispatch(fetchGuests('/guests?attending=true'))}>Show attending guests</Button>
      <Button onClick={() => dispatch(fetchGuests('/guests?attending=false'))}>Show not attending</Button>

      {guests.map(guest => (
        <GuestItem
          key={guest._id}
          firstName={guest.first_name}
          lastName={guest.last_name}
          email={guest.email}
          phone={guest.phone}
          allergies={guest.allergies}
          other={guest.other}
        />
      ))}

    </>
  )
}
