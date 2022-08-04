import styled from 'styled-components'

const Container = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  background-color: ${props => props.backGround};
  font: normal 400 14px 'Roboto', sans-serif;
  color: #000000;
  padding-left: 14px;

  ::placeholder {
    color: #7e7e7e;
  }

  :focus {
    outline: 2px solid rgba(120, 177, 89, 0.25);
  }
`

export { Container }
