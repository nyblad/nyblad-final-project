import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { Button } from 'lib/Button'

const Wrapper = styled.section`
  width: 100%;
  height: 200px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgba(255,255,255, 0.5);
  border-radius: 6px;
  @media (min-width: 668px) {
    width: 80%;
  }
  @media (min-width: 800px) {
    width: 60%;
  }
  @media (min-width: 992px) {
    width: 40%;
  }
`
const Text = styled.h3`
  margin: 15px 0 2px 0;
  color: #333;
  /* text-align: center; */
`
export const RsvpConfirm = () => {

  return (
    <Wrapper>
      <Text>Thank you.</Text>
      <Text>Hope we see you at the ceremony!</Text>
      <Link to={'/rsvp'}>
        <Button title='RSVP for another guest?' />
      </Link>
    </Wrapper>
  )

}