import styled from 'styled-components/macro'

export const NavWrapper = styled.section`
  position: fixed;
  z-index: 1001;
  width: 100%;
  height: ${props => (props.menuActive ? '100%' : '10%')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px;
  background: ${props => (props.menuActive ? 'rgba(0, 0, 0, 0.9)' : 'none')};  
  @media (min-width: 668px) {
    position: relative;
    background: none;
  }
`
export const BurgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.menuActive ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.3)')};  
  width: 46px;
  height: 42px;
  &:focus {
    outline-color: #B2621C;
    outline-offset: 3px;
  }
  @media (min-width: 668px) {
    display: none;
  }
`
export const NavLinks = styled.nav`
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
export const NavButton = styled.button`
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
    outline-color: #B2621C;
    outline-offset: 3px;
  }
  &:hover {
    color: #B2621C;
  }
  @media (min-width: 668px) {
    font-size: 14px;
    font-weight: 400;
  }
  @media (min-width: 992px) {
    font-size: 18px;
  }
`
export const CoupleHeading = styled.p`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 25px;
  font-weight: 600;
  color: #B2621C;
  display: none;
  @media (min-width: 668px) {
    display: block;
  }
`