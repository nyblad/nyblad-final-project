import styled from 'styled-components/macro'
import wallpaperLarge from 'assets/couple-hills-2500.jpg'
import wallpaperSmall from 'assets/couple-hills-1100.jpg'

export const Wrapper = styled.main`
  padding-top: 60px;
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
export const TextDark = styled.p`
  margin: 5px 0;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  letter-spacing: 1.5px;
  text-align: center;
`
export const TextWhite = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin: 0 0 20px 0;
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