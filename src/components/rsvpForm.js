import React from 'react'
import styled from 'styled-components/macro'
// import { useDispatch } from 'react-redux'
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

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          <LabelText>First name *</LabelText>
          <Input
            type="text"
            placeholder="First name"
            required
          />
        </Label>

        <Label>
          <LabelText>Last name *</LabelText>
          <Input
            type="text"
            placeholder="Last name"
            required
          />
        </Label>

        <Label>
          <LabelText>Will you attend the wedding? *</LabelText>
          <RadioWrapper>
            <RadioInput type="radio" name="Attending" value="Yes" defaultChecked />
            <RadioText>Yes</RadioText>
          </RadioWrapper>
          <RadioWrapper>
            <RadioInput type="radio" name="Attending" value="No" />
            <RadioText>No</RadioText>
          </RadioWrapper>
        </Label>

        <Label>
          <LabelText>E-mail *</LabelText>
          <Input
            placeholder="mail@mail.com"
            required
          />
        </Label>

        <Label>
          <LabelText>Phone number</LabelText>
          <Input placeholder="46700000000" />
        </Label>

        <Label>
          <LabelText>Allergies</LabelText>
          <Input placeholder="If you have any food allergies/requirements.." />
        </Label>

        <Label>
          <LabelText>Other</LabelText>
          <TextAreaInput
            rows="4"
            placeholder="Type your message here.." />
        </Label>

        <Button type="submit" title="Submit" />
      </Form>
    </Wrapper>
  )
}
