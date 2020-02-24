import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { fetchUser } from 'reducers/users'
import { useDispatch, useSelector } from 'react-redux'
import { ui } from 'reducers/ui'
import { Button, ButtonNormal } from 'lib/Buttons'
import { FixedWrapper } from 'lib/StyledComps'
import { Form, Label, LabelText, Input } from 'lib/FormStyles'

const LabelTextWhite = styled(LabelText)`
  color: #fff;
`
const FailedText = styled.p`
  font-size: 16px;
  color: #c65353;
  margin: 0;
`
const ButtonClose = styled(ButtonNormal)`
  align-self: flex-end;
  width: 45px;
`

export const LoginForm = () => {

  const dispatch = useDispatch()

  const open = useSelector(state => state.ui.isLoginOpen)
  const failed = useSelector(state => state.ui.isLoginFailed)
  const userName = useSelector(state => state.users.userName)

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

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(fetchUser(formValues))
    clearInputs()
    console.log(userName)
  }

  const close = () => {
    dispatch(ui.actions.setLoginOpen(false))
  }

  return (
    <>
      {open && (
        <FixedWrapper>
          <Form onSubmit={handleLogin}>
            <ButtonClose type='button' onClick={close}>X</ButtonClose>
            <Label>
              <LabelTextWhite>E-mail</LabelTextWhite>
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
              <LabelTextWhite>Password</LabelTextWhite>
              <Input
                onChange={event => setFormValues({ ...formValues, password: event.target.value })}
                value={formValues.password}
                type="password"
                required
              />
            </Label>
            <Button type='submit' title='Login' />
          </Form>
          {failed && <FailedText>Incorrect user and/or password.</FailedText>}
        </FixedWrapper>
      )}
    </>
  )
}