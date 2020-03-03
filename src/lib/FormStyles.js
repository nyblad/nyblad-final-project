import styled from 'styled-components/macro'

export const Form = styled.form`
  margin: 15px 0;
  width: 90%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  @media (min-width: 668px) {
    width: 80%;
    padding: 20px 40px;
  }
  @media (min-width: 800px) {
    width: 60%;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
`
export const Label = styled.label`
  width: 100%;
  padding: 5px 0;
`
export const LabelText = styled.p`
  margin: 15px 0 8px 0;
  font-size: 14px;
  font-weight: bold;
  @media (min-width: 668px) {
    font-size: 16px;
  }
`
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  @media (min-width: 668px) {
    font-size: 16px;
  }
`
export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
`
export const RadioText = styled.p`
  margin: 0;
`
export const RadioInput = styled.input`
  width: 30px;
  padding: 10px;
`
export const TextAreaInput = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #e6e6e6;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  @media (min-width: 668px) {
    font-size: 16px;
  }
`