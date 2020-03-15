import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { ui } from 'reducers/ui'
import { updateGuests } from 'reducers/guests'
import { useDispatch, useSelector } from 'react-redux'
import { FixedWrapper } from 'lib/StyledComps'
import { Button } from 'lib/Buttons'
import { Form, Label, LabelText, Input, RadioWrapper, RadioText, RadioInput, TextAreaInput } from 'lib/FormStyles'
import { LoadingSpinner } from 'components/LoadingSpinner'

const StyledForm = styled(Form)`
  padding: 0;
`
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
const ButtonClose = styled(Button)`
  align-self: flex-end;
  width: 45px;
`

export const ConfirmEditGuest = () => {

  const dispatch = useDispatch()
  const open = useSelector(state => state.ui.isConfirmEditOpen)
  const guest = useSelector(state => state.guests.guest)
  const loading = useSelector(state => state.ui.isLoading)

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

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(updateGuests(formValues, guest))
    dispatch(ui.actions.setConfirmEditOpen(false))
  }

  const handleClose = () => {
    dispatch(ui.actions.setConfirmEditOpen(false))
  }

  return (
    <>
      {open && (
        <FixedWrapper>
          <StyledForm onSubmit={handleSubmit}>
            <ButtonClose type='button' title='X' onClick={handleClose} />
            <WrapperRow>
              <StyledLabel>
                <LabelTextWhite>First name *</LabelTextWhite>
                <StyledInput
                  onChange={event => setFormValues({ ...formValues, first_name: event.target.value })}
                  value={formValues.first_name}
                  type='text'
                  minLength='2'
                  maxLength='50'
                  required
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
                  required
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
                    required
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
                  required
                />
              </StyledLabel>

              <StyledLabel>
                <LabelTextWhite>Phone number</LabelTextWhite>
                <StyledInput
                  onChange={event => setFormValues({ ...formValues, phone: event.target.value })}
                  value={formValues.phone}
                  type='text'
                />
              </StyledLabel>
            </WrapperRow>
            <Label>
              <LabelTextWhite>Allergies</LabelTextWhite>
              <StyledInput
                onChange={event => setFormValues({ ...formValues, allergies: event.target.value })}
                value={formValues.allergies}
                type='text'
              />
            </Label>

            <Label>
              <LabelTextWhite>Other</LabelTextWhite>
              <StyledTextAreaInput
                onChange={event => setFormValues({ ...formValues, other: event.target.value })}
                value={formValues.other}
                type='text'
                rows='2'
              />
            </Label>
            <Button type='submit' title='Update guest' />
          </StyledForm>
          {loading && <LoadingSpinner />}
        </FixedWrapper>
      )}
    </>
  )
}