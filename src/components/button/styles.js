import styled from 'styled-components'

const Container = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font: normal 700 18px 'Roboto', sans-serif;
  opacity: ${props => props.opacity};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export { Container }
