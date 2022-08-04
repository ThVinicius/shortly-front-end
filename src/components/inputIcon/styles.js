import styled from 'styled-components'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const InputBox = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  background-color: ${props => props.backGround};

  input {
    width: calc(${props => props.width} - 50px);
    height: calc(${props => props.height} - 6px);
    border: none;
    border-radius: 12px;
    font: normal 400 14px 'Roboto', sans-serif;
    color: #000000;
    padding-left: 14px;
    background-color: ${props => props.backGround};

    ::placeholder {
      color: #7e7e7e;
    }
  }

  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  &:focus-within {
    outline: 2px solid rgba(120, 177, 89, 0.25);
  }

  div {
    width: 50px;
    height: ${props => props.height};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Eye = styled(BsEye)`
  width: 40px;
  height: 40px;
`

const EyeSlash = styled(BsEyeSlash)`
  width: 40px;
  height: 40px;
`

export { InputBox, Eye, EyeSlash }
