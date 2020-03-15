import React from 'react'
import styled from 'styled-components/macro'

export const StyledButton = styled.button`
  font-family: 'Open Sans', sans-serif;
  height: 45px;
  ${p => p.width && `width: ${p.width}`};
  border: 3px solid #fff;
  border-radius: 6px;
  background: rgba(0,0,0, 0.2);
  transition: 0.6s;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: rgba(255,255,255, 0.2);
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

export const Button = ({ onClick, title, width, ...props }) => (

  <StyledButton onClick={onClick} width={width} {...props}>{title}</StyledButton>

)

