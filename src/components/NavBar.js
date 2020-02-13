import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import menuIcon from 'assets/menu-24.png'

const NavWrapper = styled.section`
  width: 100%;
  padding: 10px;
  height: ${props => (props.menuActive ? "100vh" : "")};
  background: ${props => (props.menuActive ? "gray" : "none")};
`
const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  @media (min-width: 668px) {
    display: none;
  }
  /* Rotate 90 degrees when clicked? */
`
const MenuIcon = styled.img`
  height: 25px;
`
const NavLinks = styled.nav`
  display: ${props => (props.menuActive ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 668px) {
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`
const NavButton = styled.button`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: #fff;
  height: 40px;
  border: none;
  background: transparent;
  transition: 0.6s;
  cursor: pointer;
  &:hover {
    color: #666;
  }
  @media (min-width: 450px) {
    font-size: 18px;
  }
  @media (min-width: 992px) {
    font-size: 25px;
  }
`

export const NavBar = () => {

  const [menuActive, setMenuActive] = useState(false)

  return (
    <NavWrapper menuActive={menuActive === true}>
      <MenuButton onClick={() => setMenuActive(!menuActive)}>
        <MenuIcon src={menuIcon} />
      </MenuButton>
      <NavLinks menuActive={menuActive === true}>
        <Link to={'/'}>
          <NavButton>Info</NavButton>
        </Link>
        <Link to={'/guests'}>
          <NavButton>Guestlist</NavButton>
        </Link>
        <Link to={'/'}>
          <NavButton>Other</NavButton>
        </Link>
        <Link to={'/rsvp'}>
          <NavButton>RSVP</NavButton>
        </Link>
      </NavLinks>
    </NavWrapper>
  )
}