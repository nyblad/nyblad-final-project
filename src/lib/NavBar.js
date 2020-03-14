import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'
import { NavWrapper, BurgerWrapper, NavLinks, NavButton, CoupleHeading } from 'lib/NavBarStyles'

export const NavBar = ({ navA, navB, navC, navD, linkB, linkC, linkD }) => {

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
          <NavButton>{navA}</NavButton>
        </Link>

        <Link to={`/${linkB}`} tabIndex='-1'>
          <NavButton>{navB}</NavButton>
        </Link>

        <CoupleHeading>Sofie & Magnus</CoupleHeading>

        <Link to={`/${linkC}`} tabIndex='-1'>
          <NavButton>{navC}</NavButton>
        </Link>

        <Link to={`/${linkD}`} tabIndex='-1'>
          <NavButton>{navD}</NavButton>
        </Link>

      </NavLinks>
    </NavWrapper>
  )
}