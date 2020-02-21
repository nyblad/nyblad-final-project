import React, { useState } from 'react'
import styled from 'styled-components/macro'
// import { useHistory } from 'react-router-dom'
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

  const handleSubmit = (event) => {
    event.preventDefault()
    clearInputs()
    console.table(formValues)
    // dispatch user info to reducer?
    dispatch(ui.actions.setLoginOpen(false))
    // history.pushState('/guests')
  }

  const close = () => {
    dispatch(ui.actions.setLoginOpen(false))
  }

  return (
    <>
      {open && (
        <FixedWrapper>
          <Form onSubmit={handleSubmit}>
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