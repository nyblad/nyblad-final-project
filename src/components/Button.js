import React from 'react'
import styled from 'styled-components/macro'

const StyledButton = styled.button`
  font-family: 'Open Sans', sans-serif;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 6px;
  background: #4C5B61;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #657881;
  }
`

export const Button = ({ onClick, title }) => (

  <StyledButton onClick={onClick}>{title}</StyledButton>

)

