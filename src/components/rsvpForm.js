import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { sendGuests } from 'reducers/guests'
import wallpaperLarge from 'assets/couple-hills.jpg'
import { Button } from 'lib/Button'

const Wrapper = styled.main`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${wallpaperLarge});
  background-size: cover;
  background-position: center;
  @media (min-width: 668px) {
    padding: 20px;
  }
  @media (min-width: 992px) {
    padding: 30px;
  }
`
const Form = styled.form`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255, 0.4);
  border-radius: 6px;
  @media (min-width: 668px) {
    width: 80%;
  }
  @media (min-width: 800px) {
    width: 60%;
  }
  @media (min-width: 992px) {
    width: 40%;
  }
`
const Label = styled.label`
  width: 100%;
`
const LabelText = styled.h3`
  margin: 15px 0 2px 0;
`
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #e6e6e6;
  border-radius: 3px;
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

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formValues)
    // dispatch(guests.actions.addGuest(formValues))
    dispatch(sendGuests(formValues))
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          <LabelText>First name *</LabelText>
          <Input
            onChange={event => setFormValues({ ...formValues, first_name: event.target.value })}
            value={formValues.first_name}
            type="text"
            placeholder="First name"
            required
          />
        </Label>

        <Label>
          <LabelText>Last name *</LabelText>
          <Input
            onChange={event => setFormValues({ ...formValues, last_name: event.target.value })}
            value={formValues.last_name}
            type="text"
            placeholder="Last name"
            required
          />
        </Label>

        <Label>
          <LabelText>Will you attend the wedding? *</LabelText>
          <RadioWrapper>
            <RadioInput
              onChange={event => setFormValues({ ...formValues, isAttending: event.target.value })}
              type="radio"
              name="isAttending"
              value="true"
              checked={formValues.isAttending === "true"}
            />
            <RadioText>Yes</RadioText>
          </RadioWrapper>
        </Label>
        <Label>
          <RadioWrapper>
            <RadioInput
              onChange={event => setFormValues({ ...formValues, isAttending: event.target.value })}
              type="radio"
              name="isAttending"
              value="false"
              checked={formValues.isAttending === "false"}
            />
            <RadioText>No</RadioText>
          </RadioWrapper>
        </Label>

        <Label>
          <LabelText>E-mail *</LabelText>
          <Input
            onChange={event => setFormValues({ ...formValues, email: event.target.value })}
            value={formValues.email}
            placeholder="mail@mail.com"
            required
          />
        </Label>

        <Label>
          <LabelText>Phone number</LabelText>
          <Input
            onChange={event => setFormValues({ ...formValues, phone: event.target.value })}
            value={formValues.phone}
            type="number"
            placeholder="46700000000"
          />
        </Label>

        <Label>
          <LabelText>Allergies</LabelText>
          <Input
            onChange={event => setFormValues({ ...formValues, allergies: event.target.value })}
            value={formValues.allergies}
            type="text"
            placeholder="If you have any food allergies/requirements.."
          />
        </Label>

        <Label>
          <LabelText>Other</LabelText>
          <TextAreaInput
            onChange={event => setFormValues({ ...formValues, other: event.target.value })}
            value={formValues.other}
            type="text"
            rows="4"
            placeholder="Type your message here.." />
        </Label>

        <Button type="submit" title="Submit" />
      </Form>
    </Wrapper >
  )
}
