import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { ui } from 'reducers/ui'
import { useDispatch } from 'react-redux'
import { sendGuests } from 'reducers/guests'
import { Button } from 'lib/Buttons'
import { Form, Label, LabelText, Input, RadioWrapper, RadioText, RadioInput, TextAreaInput } from 'lib/FormStyles'

const StyledForm = styled(Form)`
  background: rgba(255,255,255, 0.4);
`

export const RsvpForm = () => {
  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState({
    first_name: '',
    last_name: '',
    isAttending: '',
    email: '',
    phone: '',
    allergies: '',
    other: '',
  });

  const clearInputs = () => {
    setFormValues({
      first_name: '',
      last_name: '',
      isAttending: '',
      email: '',
      phone: '',
      allergies: '',
      other: '',
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(sendGuests(formValues)) // Sending the form values to the thunk in reducer
    clearInputs()
    dispatch(ui.actions.setRsvpConfirmOpen(true)) // Open the confirm alert for rsvp
  }

  // Enable submit button if theese validators are ok
  const enabled = (formValues.first_name.length >= 2 && formValues.last_name.length >= 2 && formValues.email.length >= 5 && formValues.isAttending !== '')

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label>
        <LabelText>First name *</LabelText>
        <Input
          onChange={event => setFormValues({ ...formValues, first_name: event.target.value })}
          value={formValues.first_name}
          type='text'
          placeholder='First name'
          minLength='2'
          maxLength='50'
          required
        />
      </Label>

      <Label>
        <LabelText>Last name *</LabelText>
        <Input
          onChange={event => setFormValues({ ...formValues, last_name: event.target.value })}
          value={formValues.last_name}
          type='text'
          placeholder='Last name'
          minLength='2'
          maxLength='50'
          required
        />
      </Label>

      <Label>
        <LabelText>Will you attend the wedding? *</LabelText>
        <RadioWrapper>
          <RadioInput
            onChange={event => setFormValues({ ...formValues, isAttending: event.target.value })}
            type='radio'
            name='isAttending'
            value='true'
            checked={formValues.isAttending === 'true'}
          />
          <RadioText>Yes</RadioText>
        </RadioWrapper>
      </Label>
      <Label>
        <RadioWrapper>
          <RadioInput
            onChange={event => setFormValues({ ...formValues, isAttending: event.target.value })}
            type='radio'
            name='isAttending'
            value='false'
            checked={formValues.isAttending === 'false'}
          />
          <RadioText>No</RadioText>
        </RadioWrapper>
      </Label>

      <Label>
        <LabelText>E-mail *</LabelText>
        <Input
          onChange={event => setFormValues({ ...formValues, email: event.target.value })}
          value={formValues.email}
          placeholder='mail@mail.com'
          required
          minLength='5'
          maxLength='100'
        />
      </Label>

      <Label>
        <LabelText>Phone number</LabelText>
        <Input
          onChange={event => setFormValues({ ...formValues, phone: event.target.value })}
          value={formValues.phone}
          type='number'
          placeholder='46700000000'
        />
      </Label>

      <Label>
        <LabelText>Allergies</LabelText>
        <Input
          onChange={event => setFormValues({ ...formValues, allergies: event.target.value })}
          value={formValues.allergies}
          type='text'
          placeholder='If you have any food allergies/requirements..'
        />
      </Label>

      <Label>
        <LabelText>Other</LabelText>
        <TextAreaInput
          onChange={event => setFormValues({ ...formValues, other: event.target.value })}
          value={formValues.other}
          type='text'
          rows='4'
          placeholder='Type your message here..' />
      </Label>

      <Button type='submit' title='Submit' disabled={!enabled} />
      {!enabled && <LabelText>* Please check the required fields</LabelText>}
    </StyledForm>
  )
}
