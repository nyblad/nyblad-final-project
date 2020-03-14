import React from 'react'
import styled from 'styled-components/macro'

const SearchForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`
const SearchInput = styled.input`
  font-family: 'Open Sans', sans-serif;
  background-color: #fff;
  color: #1E1E1E;
  width: 80%;
  height: 45px;
  border-radius: 6px 0 0 6px;
  border: none;
  &:focus {
    outline-color: #BC7C43;
    outline-offset: 3px;
  }
`
const SearchButton = styled.button`
  height: 45px;
  width: 20%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 0 6px 6px 0;
  border: none;
  &:focus {
    outline-color: #BC7C43;
    outline-offset: 3px;
  }
`
const Icon = styled.img`
  margin: 0;
  filter: invert(1);
`

export const SearchBar = ({ onSubmit, type, value, onChange, placeholder, src, alt }) => (

  <SearchForm onSubmit={onSubmit}>
    <SearchInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    <SearchButton>
      <Icon src={src} alt={alt} />
    </SearchButton>
  </SearchForm>

)