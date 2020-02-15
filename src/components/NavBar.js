import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'

const NavWrapper = styled.section`
  position: fixed;
  z-index: 1001;
  width: 100%;
  height: ${props => (props.menuActive ? '100%' : '10%')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px;
  background: ${props => (props.menuActive ? 'rgba(102, 102, 102, 0.9)' : 'none')};
  @media (min-width: 668px) {
    position: relative;
    background: none;
  }
`
const BurgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(102, 102, 102, 0.3);
  width: 46px;
  height: 42px;
  &:focus {
    outline-color: #BC7C43;
    outline-offset: 3px;
  }
  @media (min-width: 668px) {
    display: none;
  }
`
const NavLinks = styled.nav`
  display: ${props => (props.menuActive ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60%;
  padding-top: 50px;
  @media (min-width: 668px) {
    background: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 0;
  }
`
const NavButton = styled.button`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 26px;
  font-weight: 600;
  color: #fff;
  height: 40px;
  border: none;
  background: transparent;
  transition: 0.6s;
  cursor: pointer;
  &:focus {
    outline-color: #BC7C43;
    outline-offset: 3px;
  }
  &:hover {
    color: #BC7C43;
  }
  @media (min-width: 668px) {
    font-size: 18px;
    font-weight: 400;
  }
`
const CoupleHeading = styled.p`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 25px;
  font-weight: 600;
  color: #BC7C43;
  display: none;
  @media (min-width: 668px) {
    display: block;
  }
`

export const NavBar = () => {

  const [menuActive, setMenuActive] = useState(false)

  return (
    <NavWrapper menuActive={menuActive === true} role='navigation'>

      <BurgerWrapper
        onKeyPress={(event) => { event.key === "Enter" && setMenuActive(!menuActive) }}
        tabIndex='0'
        aria-label='Open menu'
        role='button'
        aria-pressed={menuActive ? 'true' : 'false'}
      >
        <HamburgerMenu
          isOpen={menuActive === true}
          menuClicked={() => setMenuActive(!menuActive)}
          width={40}
          height={32}
          strokeWidth={2}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.5}
        />
      </BurgerWrapper>

      {/* Tabindex -1 to not have double tabbing at every link*/}
      <NavLinks menuActive={menuActive === true}>

        <Link to={'/'} tabIndex='-1'>
          <NavButton>Info</NavButton>
        </Link>

        <Link to={'/location'} tabIndex='-1'>
          <NavButton>Location</NavButton>
        </Link>

        <CoupleHeading>Sofie & Magnus</CoupleHeading>

        <Link to={'/music'} tabIndex='-1'>
          <NavButton>Music</NavButton>
        </Link>

        <Link to={'/rsvp'} tabIndex='-1'>
          <NavButton>RSVP</NavButton>
        </Link>

      </NavLinks>
    </NavWrapper>
  )
}