import React, { useState, useEffect } from 'react'
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
  const guest = useSelector(state => state.guests.guest)
  const loading = useSelector(state => state.ui.isLoading)

  // How to set current guest data as initial state?
  const [formValues, setFormValues] = useState({
    first_name: guest.first_name || '',
    last_name: guest.last_name || '',
    isAttending: guest.isAttending || '',
    email: guest.email || '',
    phone: guest.phone || '',
    allergies: guest.allergies || '',
    other: guest.other || '',
    updatedAt: Date.now()
  })

  // To make sure the formValues are populated by guest from useSelector
  useEffect(() => {
    setFormValues(guest)
  }, [guest])

  // Update specific guest with new values
  // I want current guest data to be default values
  // User edits the values he/she wants to edit
  // Send data to db in thunk updateGuests
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(updateGuests(formValues, guest._id))
    dispatch(ui.actions.setConfirmEditOpen(false))
  }

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
                  // onChange={event => setFormValues({ ...formValues, first_name: event.target.defaultValue })}
                  value={formValues.first_name}
                  type='text'
                  minLength='2'
                  maxLength='50'
                  required
                // defaultValue={guest.first_name}
                />
              </StyledLabel>

              <StyledLabel>
                <LabelTextWhite>Last name *</LabelTextWhite>
                <StyledInput
                  onChange={event => setFormValues({ ...formValues, last_name: event.target.value })}
                  // onChange={event => setFormValues({ ...formValues, last_name: event.target.defaultValue })}
                  value={formValues.last_name}
                  type='text'
                  minLength='2'
                  maxLength='50'
                  required
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
                    // onChange={event => setFormValues({ ...formValues, isAttending: event.target.defaultValue })}
                    type='radio'
                    name='isAttending'
                    value='true'
                    checked={formValues.isAttending === 'true'}
                  // defaultChecked={guest.isAttending === 'true'}
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
                  // defaultChecked={guest.isAttending === 'false'}
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
                  // onChange={event => setFormValues({ ...formValues, email: event.target.defaultValue })}
                  value={formValues.email}
                  minLength='5'
                  maxLength='100'
                  required
                // defaultValue={guest.email}
                />
              </StyledLabel>

              <StyledLabel>
                <LabelTextWhite>Phone number</LabelTextWhite>
                <StyledInput
                  onChange={event => setFormValues({ ...formValues, phone: event.target.value })}
                  // onChange={event => setFormValues({ ...formValues, phone: event.target.defaultValue })}
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
                // onChange={event => setFormValues({ ...formValues, allergies: event.target.defaultValue })}
                value={formValues.allergies}
                type='text'
              // defaultValue={guest.allergies}
              />
            </Label>

            <Label>
              <LabelTextWhite>Other</LabelTextWhite>
              <StyledTextAreaInput
                onChange={event => setFormValues({ ...formValues, other: event.target.value })}
                // onChange={event => setFormValues({ ...formValues, other: event.target.defaultValue })}
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