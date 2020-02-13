import React from 'react'
import styled from 'styled-components/macro'
// import { useDispatch } from 'react-redux'
import remove from 'assets/remove-24.png'
import edit from 'assets/edit-24.png'

const GuestWrapper = styled.div`
  width: 100%;
  background: rgba(255,255,255, 0.5);
  border-radius: 6px;
  color: #333;
  margin: 8px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 668px) {
    width: 48%;
  }
  @media (min-width: 800px) {
    width: 32%;
  }
  @media (min-width: 992px) {
    width: 23%;
  }
`
const InfoWrapper = styled.div`

`
const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Text = styled.p`
  font-size: 14px;
  margin: 5px 0;
`
const FatText = styled.span`
  font-weight: bold;
  font-size: 14px;
`
const ActionButton = styled.button`
  margin: 0 0 10px 0;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`
const Icon = styled.img`
  margin: 0;
`

export const GuestItem = ({ firstName, lastName, email, phone, allergies, other, attending }) => {

  // const dispatch = useDispatch()

  // PREPARE FOR DELETING GUEST
  const handleRemoveGuest = () => {
    // dispatchEvent(guests.actions.removeGuest(guest._id))
  }

  // PREPARE FOR UPDATING GUEST
  const handleUpdateGuest = () => {
    // dispatchEvent(guests.actions.updateGuest(guest._id))
  }

  return (
    <GuestWrapper>
      <InfoWrapper>
        <Text><FatText>Name:</FatText> {firstName} {lastName}</Text>
        <Text><FatText>Email:</FatText> {email}</Text>
        <Text><FatText>Phone:</FatText> {phone}</Text>
        {allergies && <Text><FatText>Allergies:</FatText> {allergies}</Text>}
        {other && <Text><FatText>Other:</FatText> {other}</Text>}
        <Text><FatText>Attending:</FatText> {attending}</Text>
      </InfoWrapper>
      <ActionsWrapper>
        <ActionButton onClick={handleUpdateGuest}>
          <Icon src={edit} alt='edit' />
        </ActionButton>
        <ActionButton onClick={handleRemoveGuest}>
          <Icon src={remove} alt='delete' />
        </ActionButton>
      </ActionsWrapper>
    </GuestWrapper>
  )
}