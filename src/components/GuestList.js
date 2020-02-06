import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGuests } from 'reducers/guests'
import { GuestItem } from 'components/GuestItem'
import { Button } from 'lib/Button'
import { SearchBar } from 'lib/SearchBar'
import search from 'assets/search-24.png'

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
const SmallText = styled.p`
  font-size: 12px;
  color: #333;
  text-align: center;
`

export const GuestList = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('?page=')
  const [page, setPage] = useState(0)
  const [searchInput, setSearchInput] = useState('')

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

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    setQuery(`?name=${searchInput}&page=`)
    setPage(0)
    setSearchInput('')
    console.log(searchInput)
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

      <SearchBar
        onSubmit={handleSearchSubmit}
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        type='text'
        placeholder='Search for a name..'
        src={search}
        alt='search'
      />

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
      {page < totalPages && <SmallText>Page {page + 1} of {totalPages + 1}</SmallText>}
      {page > totalPages && <SmallText>Page {page + 1} of {totalPages + page + 1}</SmallText>}
      <ButtonWrapper>
        {page > 0 && <Button title='Prev' onClick={() => setPage(page - 1)} />}
        {page < totalPages && <Button title='Next' onClick={() => setPage(page + 1)} />}
      </ButtonWrapper>
    </Wrapper >
  )
}
