import React, { useState, useEffect } from 'react'
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
  const [query, setQuery] = useState('?page=')
  const [page, setPage] = useState(0)

  const guests = useSelector(state => state.guests.guests)
  const totalPages = useSelector(state => state.guests.totalPages)

  const handleAll = () => {
    setQuery('?page=')
    setPage(0)
  }
  const handleAttending = () => {
    setQuery('?attending=true&page=')
    setPage(0)
  }
  const handleNotAttending = () => {
    setQuery('?attending=false&page=')
    setPage(0)
  }

  useEffect(() => {
    dispatch(fetchGuests(`/guests${query}${page}`))
  }, [dispatch, query, page])

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button title='All guests' onClick={handleAll} />
        <Button title='Attending' onClick={handleAttending} />
        <Button title='Not attending' onClick={handleNotAttending} />
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

      <ButtonWrapper>
        {page > 0 && <Button title='Prev' onClick={() => setPage(page - 1)} />}
        {page < totalPages && <Button title='Next' onClick={() => setPage(page + 1)} />}
      </ButtonWrapper>
    </Wrapper>
  )
}
