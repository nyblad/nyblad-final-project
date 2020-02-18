import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Button } from 'lib/Button'
import { useDispatch, useSelector } from 'react-redux'
import { ui } from 'reducers/ui'

const FormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`
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
const ButtonClose = styled.button`
  align-self: flex-end;
  width: 45px;
  font-family: 'Open Sans', sans-serif;
  height: 45px;
  border: 3px solid #fff;
  border-radius: 6px;
  background: rgba(0,0,0, 0.2);
  transition: 0.6s;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: rgba(0,0,0, 0.6);
  }
  &:focus {
    outline-color: #BC7C43;
    outline-offset: 5px;
  }
  @media (min-width: 450px) {
    font-size: 16px;
  }
  @media (min-width: 992px) {
    font-size: 20px;
    padding: 0 15px;
  }
`

export const LoginForm = () => {

  const dispatch = useDispatch()
  const open = useSelector(state => state.ui.isLoginOpen)

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const clearInputs = () => {
    setFormValues({
      email: '',
      password: '',
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    clearInputs()
    console.table(formValues)
    // dispatch user info to reducer?
    dispatch(ui.actions.setLoginOpen(false))
  }

  const close = () => {
    dispatch(ui.actions.setLoginOpen(false))
  }

  return (
    <>
      {open && (
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <ButtonClose type='button' onClick={close}>X</ButtonClose>
            <Label>
              <LabelText>E-mail</LabelText>
              <Input
                onChange={event => setFormValues({ ...formValues, email: event.target.value })}
                value={formValues.email}
                type="email"
                placeholder="mail@mail.com"
                minLength="2"
                maxLength="50"
                required
              />
            </Label>

            <Label>
              <LabelText>Password</LabelText>
              <Input
                onChange={event => setFormValues({ ...formValues, password: event.target.value })}
                value={formValues.password}
                type="password"
                required
              />
            </Label>
            <Button type='submit' title='Login' />
          </Form>
        </FormWrapper>
      )}
    </>
  )
}