import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import moment from 'moment'
import { ui } from 'reducers/ui'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGuests, updateGuests, deleteGuests } from 'reducers/guests'
import { GuestItem } from 'components/GuestItem'
import { Button } from 'lib/Buttons'
import { SearchBar } from 'lib/SearchBar'
import { LoadingSpinner } from 'components/LoadingSpinner'
import search from 'assets/search-24.png'

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
const PaginationWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: baseline;
`
const PageButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (min-width: 668px) {
    width: 50%;
  }
  @media (min-width: 992px) {
    width: 30%;
  }
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

  const handleConfirm = () => {
    dispatch(ui.actions.setConfirmOpen(true))
    // How to pass on the guestId to Confirm component?
  }

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
    dispatch(fetchGuests(`/${query}`))
  }, [dispatch, query])

  // Frontend pagination
  const itemsPerPage = 12
  const endIndex = currentPage * itemsPerPage
  const startIndex = endIndex - itemsPerPage
  const currentItems = guests.slice(startIndex, endIndex)
  const totalPages = Math.ceil(guests.length / itemsPerPage)

  return (
    <>
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
            placeholder='Search for first or last name..'
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
                attending={guest.isAttending ? "😃" : "☹️"}
                addedAt={moment(guest.addedAt).format('ll')}
                onClickDelete={() => handleConfirm(guest._id)}
                // onClickDelete={() => { if (window.confirm('Are you sure you want to delete guest?')) dispatch(deleteGuests(guest._id)) }}
                onClickEdit={() => { if (window.confirm('Do you want to change attending status on guest?')) dispatch(updateGuests(guest._id)) }}
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
    </>
  )
}
