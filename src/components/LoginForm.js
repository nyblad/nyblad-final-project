import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { fetchUser } from 'reducers/users'
import { useDispatch, useSelector } from 'react-redux'
import { ui } from 'reducers/ui'
import { Button } from 'lib/Buttons'
import { FixedWrapper } from 'lib/StyledComps'
import { Form, Label, LabelText, Input } from 'lib/FormStyles'
import { LoadingSpinner } from 'components/LoadingSpinner'

const LabelTextWhite = styled(LabelText)`
  color: #fff;
`
const FailedText = styled.p`
  font-size: 16px;
  color: #c65353;
  margin: 0;
`
const ButtonClose = styled(Button)`
  align-self: flex-end;
  width: 45px;
`

export const LoginForm = () => {

  const dispatch = useDispatch()

  const open = useSelector(state => state.ui.isLoginOpen)
  const failed = useSelector(state => state.ui.isLoginFailed)
  const loading = useSelector(state => state.ui.isLoading)

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

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
  }

  const close = () => {
    dispatch(ui.actions.setLoginOpen(false))
  }

  return (
    <>
      {open && (
        <FixedWrapper>
          <Form onSubmit={handleLogin}>
            <ButtonClose type='button' title='X' onClick={close} />
            <Label>
              <LabelTextWhite>E-mail</LabelTextWhite>
              <Input
                onChange={event => setFormValues({ ...formValues, email: event.target.value })}
                value={formValues.email}
                type='email'
                placeholder='mail@mail.com'
                minLength='2'
                maxLength='50'
                required
              />
            </Label>

            <Label>
              <LabelTextWhite>Password</LabelTextWhite>
              <Input
                onChange={event => setFormValues({ ...formValues, password: event.target.value })}
                value={formValues.password}
                type='password'
                required
              />
            </Label>
            <Button type='submit' title='Login' />
          </Form>
          {failed && <FailedText>Incorrect user and/or password.</FailedText>}
          {loading && <LoadingSpinner />}
        </FixedWrapper>
      )}
    </>
  )
}