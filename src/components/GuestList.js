import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGuests } from 'reducers/guests'
import { GuestItem } from 'components/GuestItem'
import { Button } from 'lib/Button'
import { SearchBar } from 'lib/SearchBar'
import { LoadingSpinner } from 'components/LoadingSpinner'
import search from 'assets/search-24.png'
import wallpaperLarge from 'assets/couple-night.jpg'
import wallpaperSmall from 'assets/couple-night.jpg'

const Wrapper = styled.section`
  padding: 10px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${wallpaperSmall});
  background-size: cover;
  background-position: center;
  @media (min-width: 450px) {
    background: url(${wallpaperLarge});
    background-size: cover;
    background-position: center;
  }
`
const ActionWrapper = styled.div`
  width: 98%;
  @media (min-width: 992px) {
    width: 50%;
  }
`
const ButtonWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
const ItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 668px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
const SmallText = styled.p`
  font-size: 12px;
  color: #999;
  text-align: center;
`

export const GuestList = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('?page=')
  const [page, setPage] = useState(0)
  const [searchInput, setSearchInput] = useState('')

  const guests = useSelector(state => state.guests.guests)
  const totalPages = useSelector(state => state.guests.totalPages)
  const loading = useSelector(state => state.ui.isLoading)
  console.log(totalPages)

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
  }

  // To fetch endpoint from guest reducer
  useEffect(() => {
    dispatch(fetchGuests(`/guests${query}${page}`))
  }, [dispatch, query, page])

  return (
    <Wrapper>
      <ActionWrapper>
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
      </ActionWrapper>

      {loading && <LoadingSpinner />}

      {!loading &&
        <ItemWrapper>
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

          <SmallText>Page {page + 1} of {totalPages + 1}</SmallText>

        </ItemWrapper>
      }
    </Wrapper >
  )
}
