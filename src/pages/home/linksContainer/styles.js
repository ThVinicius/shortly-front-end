import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const Container = styled.div`
  width: 75vw;
  height: 100%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 28px;
`

const InputContainer = styled.div`
  width: 75vw;
  height: 60px;
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;

  div {
    width: calc(75vw - 80px);
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: ${props => props.top};
    left: 0;
    z-index: ${props => props.zIndex};
    transition: all linear 400ms;
  }

  select {
    height: calc(100% - 10px);
    background-color: #ffffff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 8px;
    font: normal 400 14px 'Lexend Deca', sans-serif;
    padding-left: 10px;
  }
`

const Search = styled(FaSearch)`
  width: 50px;
  height: 50px;
  color: #80cc74;
  cursor: pointer;
`

export { Container, InputContainer, Search }
