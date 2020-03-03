import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { ui } from 'reducers/ui'
// import { guests } from 'reducers/guests'
import { updateGuests } from 'reducers/guests'
import { useDispatch, useSelector } from 'react-redux'
import { FixedWrapper } from 'lib/StyledComps'
import { ButtonNormal } from 'lib/Buttons'
import { Form, Label, LabelText, Input, RadioWrapper, RadioText, RadioInput, TextAreaInput } from 'lib/FormStyles'
import { LoadingSpinner } from 'components/LoadingSpinner'

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const StyledLabel = styled(Label)`
  width: 48%;
`
const LabelTextWhite = styled(LabelText)`
  font-size: 12px;
  color: #fff;
  font-weight: normal;
  margin: 5px 0;
`
const StyledInput = styled(Input)`
  font-size: 12px;
  padding: 5px;
`
const StyledRadioText = styled(RadioText)`
  font-size: 12px;
  color: #fff;
`
const StyledTextAreaInput = styled(TextAreaInput)`
  font-size: 12px;
  padding: 5px;
  margin-bottom: 10px;
`
const ButtonClose = styled(ButtonNormal)`
  align-self: flex-end;
  width: 45px;
`

export const ConfirmEditGuest = () => {

  const dispatch = useDispatch()
  const open = useSelector(state => state.ui.isConfirmEditOpen)
  const guestId = useSelector(state => state.guests.guest._id)
  const loading = useSelector(state => state.ui.isLoading)
  // const guestId = guest._id

  // How to set current guest data as initial state
  const [formValues, setFormValues] = useState({
    first_name: '',
    last_name: '',
    isAttending: '',
    email: '',
    phone: '',
    allergies: '',
    other: '',
    updatedAt: Date.now()
  })

  // Update specific guest with new values
  // I want current guest data to be default values
  // User edits the values he/she wants to edit
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(updateGuests(formValues, guestId))
    dispatch(ui.actions.setConfirmEditOpen(false))
  }

  // Close editing
  const handleClose = () => {
    dispatch(ui.actions.setConfirmEditOpen(false))
  }

  return (
    <>
      {open && (
        <FixedWrapper>
          <Form onSubmit={handleSubmit}>
            <ButtonClose type='button' onClick={handleClose}>X</ButtonClose>
            <WrapperRow>
              <StyledLabel>
                <LabelTextWhite>First name *</LabelTextWhite>
                <StyledInput
                  onChange={event => setFormValues({ ...formValues, first_name: event.target.value })}
                  value={formValues.first_name}
                  type='text'
                  minLength='2'
                  maxLength='50'
                // required
                // defaultValue={guest.first_name}
                />
              </StyledLabel>

              <StyledLabel>
                <LabelTextWhite>Last name *</LabelTextWhite>
                <StyledInput
                  onChange={event => setFormValues({ ...formValues, last_name: event.target.value })}
                  value={formValues.last_name}
                  type='text'
                  minLength='2'
                  maxLength='50'
                // required
                // defaultValue={guest.last_name}
                />
              </StyledLabel>
            </WrapperRow>

            <StyledLabel>
              <LabelTextWhite>Will guest attend? *</LabelTextWhite>
              <WrapperRow>
                <RadioWrapper>
                  <RadioInput
                    onChange={event => setFormValues({ ...formValues, isAttending: event.target.value })}
                    type='radio'
                    name='isAttending'
                    value='true'
                    checked={formValues.isAttending === 'true'}
                  />
                  <StyledRadioText>Yes</StyledRadioText>
                </RadioWrapper>
                <RadioWrapper>
                  <RadioInput
                    onChange={event => setFormValues({ ...formValues, isAttending: event.target.value })}
                    type='radio'
                    name='isAttending'
                    value='false'
                    checked={formValues.isAttending === 'false'}
                  />
                  <StyledRadioText>No</StyledRadioText>
                </RadioWrapper>
              </WrapperRow>
            </StyledLabel>

            <WrapperRow>
              <StyledLabel>
                <LabelTextWhite>E-mail *</LabelTextWhite>
                <StyledInput
                  onChange={event => setFormValues({ ...formValues, email: event.target.value })}
                  value={formValues.email}
                  minLength='5'
                  maxLength='100'
                // required
                // defaultValue={guest.email}
                />
              </StyledLabel>

              <StyledLabel>
                <LabelTextWhite>Phone number</LabelTextWhite>
                <StyledInput
                  onChange={event => setFormValues({ ...formValues, phone: event.target.value })}
                  value={formValues.phone}
                  type='number'
                // defaultValue={guest.phone}
                />
              </StyledLabel>
            </WrapperRow>
            <Label>
              <LabelTextWhite>Allergies</LabelTextWhite>
              <StyledInput
                onChange={event => setFormValues({ ...formValues, allergies: event.target.value })}
                value={formValues.allergies}
                type='text'
              // defaultValue={guest.allergies}
              />
            </Label>

            <Label>
              <LabelTextWhite>Other</LabelTextWhite>
              <StyledTextAreaInput
                onChange={event => setFormValues({ ...formValues, other: event.target.value })}
                value={formValues.other}
                type='text'
                rows='2'
              // defaultValue={guest.other}
              />
            </Label>
            <ButtonNormal type='submit'>Update guest</ButtonNormal>
          </Form>
          {loading && <LoadingSpinner />}
        </FixedWrapper>
      )}
    </>
  )
}