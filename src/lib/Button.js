import React from 'react'
import styled from 'styled-components/macro'

const StyledButton = styled.button`
  font-family: 'Open Sans', sans-serif;
  min-width: 60px;
  padding: 5px 10px;
  border: 2px solid #fff;
  border-radius: 6px;
  background: rgba(0,0,0, 0.4);
  transition: 0.6s;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: rgba(0,0,0, 0.6);
  }
  @media (min-width: 450px) {
    font-size: 24px;
    padding: 10px 15px;
  }
`

export const Button = ({ onClick, title }) => (

  <StyledButton onClick={onClick}>{title}</StyledButton>

)

