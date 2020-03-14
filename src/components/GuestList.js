import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'
import { ui } from 'reducers/ui'
import { guests } from 'reducers/guests'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGuests } from 'reducers/guests'
import { GuestItem } from 'components/GuestItem'
import { Button } from 'lib/Buttons'
import { TextWhite } from 'lib/StyledComps'
import { SearchBar } from 'lib/SearchBar'
import { PaginationWrapper, PageButtons, SmallText } from 'lib/Pagination'
import { LoadingSpinner } from 'components/LoadingSpinner'
import search from 'assets/icons/search-24.png'

const ActionWrapper = styled.div`
  padding: 10px;
  background: none;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  @media (min-width: 668px) {
    flex-direction: row;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    padding: 10px;
  }
`
const ButtonWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 668px) {
    width: 50%;
  }
`
const SearchWrapper = styled.div`
  width: 100%;
  @media (min-width: 668px) {
    width: 50%;
    margin-left: 15px;
  }
`
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 70vh;
  width: 100%;
`
const ItemWrapper = styled.section`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (min-width: 668px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const GuestList = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const allGuests = useSelector(state => state.guests.guests)
  const loading = useSelector(state => state.ui.isLoading)

  const handleConfirmDelete = (guest) => {
    dispatch(guests.actions.setGuest(guest))
    dispatch(ui.actions.setConfirmDeleteOpen(true))
  }

  const handleConfirmEdit = (guest) => {
    dispatch(guests.actions.setGuest(guest))
    dispatch(ui.actions.setConfirmEditOpen(true))
  }

  const handleFilterButtons = (filterQuery) => {
    setQuery(filterQuery)
    setCurrentPage(1)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    setQuery(`?name=${searchInput}`)
    setSearchInput('')
    setCurrentPage(1)
  }

  useEffect(() => {
    dispatch(fetchGuests(`/${query}`))
  }, [dispatch, query])

  // Frontend pagination
  const itemsPerPage = 12
  const endIndex = currentPage * itemsPerPage
  const startIndex = endIndex - itemsPerPage
  const currentItems = allGuests.slice(startIndex, endIndex)
  const totalPages = Math.ceil(allGuests.length / itemsPerPage)

  return (
    <>
      <ActionWrapper>
        <ButtonWrapper>
          <Button title='All guests' onClick={() => handleFilterButtons('')} />
          <Button title='Attending' onClick={() => handleFilterButtons('?attending=true')} />
          <Button title='Not attending' onClick={() => handleFilterButtons('?attending=false')} />
        </ButtonWrapper>

        <SearchWrapper>
          <SearchBar
            onSubmit={handleSearchSubmit}
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            type='text'
            placeholder='Search for first or last name..'
            src={search}
            alt='search'
          />
        </SearchWrapper>
      </ActionWrapper>

      {loading && <LoadingSpinner />}

      {!loading && (currentItems < 1) && <TextWhite>No guest matching</TextWhite>}

      {!loading && (currentItems !== 0) &&
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
                attending={guest.isAttending ? "😃" : "☹️"}
                addedAt={moment(guest.addedAt).format('ll')}
                onClickDelete={() => handleConfirmDelete(guest)}
                onClickEdit={() => handleConfirmEdit(guest)}
              />
            ))}
          </ItemWrapper>
          <PaginationWrapper>
            <PageButtons>
              {currentPage > 1 && <Button title='Prev' onClick={() => setCurrentPage(currentPage - 1)} />}
              {currentPage < totalPages && <Button title='Next' onClick={() => setCurrentPage(currentPage + 1)} />}
            </PageButtons>

            <SmallText>Guests in list: {allGuests.length} | Page {currentPage} of {totalPages}</SmallText>

          </PaginationWrapper>
        </ListWrapper>
      }
    </>
  )
}
