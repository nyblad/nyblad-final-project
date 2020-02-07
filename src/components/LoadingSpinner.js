import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import Loader from 'react-loader-spinner'

const LoadingWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`

export const LoadingSpinner = () => {
  const isLoading = useSelector(state => state.ui.isLoading)

  return (
    <>
      {isLoading &&
        <LoadingWrapper>
          <Loader type="ThreeDots" color="#f2f2f2" height={80} width={80} />
        </LoadingWrapper>
      }
    </>
  )
}