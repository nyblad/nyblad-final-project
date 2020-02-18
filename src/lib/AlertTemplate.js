import React from 'react'
import styled from 'styled-components/macro'
import { Button } from './Button'

const AlertWrapper = styled.div`
  width: 100%;
  height: 300px;
  padding: 30px;
  position: relative;
  top: 100px;
  background: rgba(0,0,0, 0.8);
  border-radius: 6px;
  font-size: 18px;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

export const AlertTemplate = ({ options, message, close }) => {

  // const [open, setOpen] = React.useState(false)

  // const handleClickOpen = () => {
  //   setOpen(true)
  // }

  // const handleClose = () => {
  //   setOpen(false)
  // }

  return (

    <AlertWrapper>
      {options.type === 'info'}
      {message}
      <Button onClick={close} title='X' />
    </AlertWrapper>
  )
}