import styled from 'styled-components/macro'

export const PaginationWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: baseline;
`
export const PageButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (min-width: 668px) {
    width: 50%;
  }
  @media (min-width: 992px) {
    width: 30%;
  }
`
export const SmallText = styled.p`
  font-size: 12px;
  color: #999;
  @media (min-width: 668px) {
    font-size: 14px;
  }
`