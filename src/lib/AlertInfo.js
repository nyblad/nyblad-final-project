import React from 'react'
import styled from 'styled-components/macro'
import { Button } from './Button'

const AlertWrapper = styled.div`
  width: 300px;
  height: 300px;
  padding: 25px;
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

export const AlertInfo = ({ message, close }) => {

  return (
    <AlertWrapper>
      {message}
      <Button onClick={close} title='X' />
    </AlertWrapper>
  )
}