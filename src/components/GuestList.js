import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGuests } from 'reducers/guests'
import { GuestItem } from 'components/GuestItem'
import { Button } from 'components/Button'

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const GuestList = () => {
  const dispatch = useDispatch()

  const guests = useSelector(state => state.guests.guests)

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button title='Attending guests' onClick={() => dispatch(fetchGuests('/guests?attending=true'))} />
        <Button title='Not attending guests' onClick={() => dispatch(fetchGuests('/guests?attending=false'))} />
      </ButtonWrapper>

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

    </Wrapper>
  )
}
