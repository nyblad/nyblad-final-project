import styled from 'styled-components/macro'
import wallpaperLarge from 'assets/couple-hills-2500.jpg'
import wallpaperSmall from 'assets/couple-hills-1100.jpg'

// FOR CONFIRMATION DIALOGS
export const FixedWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
// MAIN WRAPPER FOR PAGES
export const Wrapper = styled.main`
  padding: 60px 0 80px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${wallpaperSmall});
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 100vmax rgba(81, 57, 64, 0.4);
  @media (min-width: 450px) {
    background: url(${wallpaperLarge});
    background-size: cover;
    background-position: center;
  }
  @media (min-width: 668px) {
    padding-top: 0;
  }
`
// TEXTS
export const Headline = styled.h1`
  margin: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  @media (min-width: 450px) {
    font-size: 48px;
  }
  @media (min-width: 668px) {
    font-size: 56px;
  }
  @media (min-width: 992px) {
    font-size: 72px;
  }
`
export const SecondaryText = styled.h3`
  margin: 0;
  color: #fff;
  @media (min-width: 450px) {
    font-size: 30px;
  }
  @media (min-width: 992px) {
    font-size: 36px;
  }
`
export const TextDark = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #333;
  letter-spacing: 1.5px;
  text-align: center;
`
export const TextWhite = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin: 10px 0;
  @media (min-width: 668px) {
    text-align: left;
  }
`
export const TextWhiteBold = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
  @media (min-width: 668px) {
    text-align: left;
  }
`
export const TextDarkItalic = styled.p`
  margin: 5px 0;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  color: #333;
  letter-spacing: 1.5px;
  text-align: center;
`
export const LinkText = styled.p`
  color: #B2621C;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  margin: 5px 0;
`
export const LinkTextWhite = styled.a`
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin: 5px 0;
`