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
  align-content: center;
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
  padding: 10px;
  background: rgba(0,0,0, 0.8);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`
const ButtonWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media (min-width: 992px) {
    width: 50%;
  }
`
const SearchWrapper = styled.div`
  width: 100%;
  @media (min-width: 992px) {
    width: 40%;
  }
`
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 70vh;
`
const ItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (min-width: 668px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
const PaginationWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: baseline;
`
const PageButtons = styled.div`
  
`
const SmallText = styled.p`
  font-size: 14px;
  color: #999;
`

export const GuestList = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const guests = useSelector(state => state.guests.guests)
  const loading = useSelector(state => state.ui.isLoading)

  const handleAll = () => {
    setQuery('')
    setCurrentPage(1)
  }
  const handleAttending = () => {
    setQuery('?attending=true')
    setCurrentPage(1)
  }
  const handleNotAttending = () => {
    setQuery('?attending=false')
    setCurrentPage(1)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    setQuery(`?name=${searchInput}`)
    setSearchInput('')
    setCurrentPage(1)
  }

  useEffect(() => {
    dispatch(fetchGuests(`/guests${query}`))
  }, [dispatch, query])

  // Frontend pagination
  const itemsPerPage = 12
  const endIndex = currentPage * itemsPerPage
  const startIndex = endIndex - itemsPerPage
  const currentItems = guests.slice(startIndex, endIndex)
  const totalPages = Math.ceil(guests.length / itemsPerPage)

  return (
    <Wrapper>
      <ActionWrapper>
        <ButtonWrapper>
          <Button title='All guests' onClick={handleAll} />
          <Button title='Attending' onClick={handleAttending} />
          <Button title='Not attending' onClick={handleNotAttending} />
        </ButtonWrapper>

        <SearchWrapper>
          <SearchBar
            onSubmit={handleSearchSubmit}
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            type='text'
            placeholder='Search for a name..'
            src={search}
            alt='search'
          />
        </SearchWrapper>
      </ActionWrapper>

      {loading && <LoadingSpinner />}

      {!loading &&
        <ListWrapper>
          <ItemWrapper>
            {currentItems.map(guest => (
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
          </ItemWrapper>
          <PaginationWrapper>
            <PageButtons>
              {currentPage > 1 && <Button title='Prev' onClick={() => setCurrentPage(currentPage - 1)} />}
              {currentPage < totalPages && <Button title='Next' onClick={() => setCurrentPage(currentPage + 1)} />}
            </PageButtons>

            <SmallText>Guests in list: {guests.length} | Page {currentPage} of {totalPages}</SmallText>

          </PaginationWrapper>
        </ListWrapper>
      }
    </Wrapper >
  )
}
