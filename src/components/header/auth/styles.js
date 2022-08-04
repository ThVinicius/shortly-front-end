import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h6 {
    font: normal 400 14px 'Lexend Deca', sans-serif;
    color: #5d9040;
  }

  div {
    width: 152px;
    display: flex;
    justify-content: space-between;

    h5 {
      font: normal 400 14px 'Lexend Deca', sans-serif;
      color: #9c9c9c;
      cursor: pointer;
    }
  }
`

export { Header }
