import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { sendGuests } from 'reducers/guests'
import { Button } from 'lib/Button'
import { ui } from 'reducers/ui'

const Form = styled.form`
  margin: 15px 0;
  width: 90%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255, 0.4);
  border-radius: 6px;
  @media (min-width: 668px) {
    width: 80%;
    padding: 20px 40px;
  }
  @media (min-width: 800px) {
    width: 60%;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
`
const Label = styled.label`
  width: 100%;
  padding: 5px 0;
`
const LabelText = styled.p`
  margin: 15px 0 8px 0;
  font-size: 16px;
  font-weight: bold;
`
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
`
const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
`
const RadioText = styled.p`
  margin: 0;
`
const RadioInput = styled.input`
  width: 30px;
  padding: 10px;
`
const TextAreaInput = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #e6e6e6;
  border-radius: 3px;
  font-family: 'Open Sans', sans-serif;
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
    <Form onSubmit={handleSubmit}>
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
      {!enabled && <LabelText>*Please check the required fields</LabelText>}
    </Form>
  )
}
