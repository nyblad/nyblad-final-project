import React, { useState } from 'react'
import styled from 'styled-components/macro'
// import { useHistory } from 'react-router-dom'
import { fetchUser } from 'reducers/users'
import { useDispatch, useSelector } from 'react-redux'
import { ui } from 'reducers/ui'
import { Button, ButtonNormal } from 'lib/Buttons'
import { FixedWrapper } from 'lib/StyledComps'
import { Form, Label, LabelText, Input } from 'lib/FormStyles'

const LabelTextWhite = styled(LabelText)`
  color: #fff;
`
const ButtonClose = styled(ButtonNormal)`
  align-self: flex-end;
  width: 45px;
`

export const LoginForm = () => {

  const dispatch = useDispatch()
  // const history = useHistory()
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

  const handleLogin = (event) => {
    event.preventDefault()
    console.table(formValues)
    dispatch(fetchUser(formValues))
    // If success:
    dispatch(ui.actions.setLoginOpen(false))
    // If failed show some message
    clearInputs() // Move this to reducer?
    // history.push('/guests')
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
        </FixedWrapper>
      )}
    </>
  )
}