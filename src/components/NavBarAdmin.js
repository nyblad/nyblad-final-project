import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'
import { NavWrapper, BurgerWrapper, NavLinks, NavButton, CoupleHeading } from 'lib/NavBarStyles'

export const NavBarAdmin = () => {

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
          <NavButton>Back to start</NavButton>
        </Link>

        <Link to={'/admin'} tabIndex='-1'>
          <NavButton>Admin</NavButton>
        </Link>

        <CoupleHeading>Sofie & Magnus</CoupleHeading>

        <Link to={'/todos'} tabIndex='-1'>
          <NavButton>To do list</NavButton>
        </Link>

        <Link to={'/guests'} tabIndex='-1'>
          <NavButton>Guest list</NavButton>
        </Link>

      </NavLinks>
    </NavWrapper>
  )
}