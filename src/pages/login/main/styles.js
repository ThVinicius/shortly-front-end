import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: end;

  div {
    width: 152px;
    display: flex;
    justify-content: space-between;

    h5 {
      font: normal 400 14px 'Lexend Deca', sans-serif;
      color: #9c9c9c;
    }

    h6 {
      font: normal 400 14px 'Lexend Deca', sans-serif;
      color: #5d9040;
    }
  }
`

const Logo = styled.div`
  display: flex;
  margin-top: 17px;
  margin-bottom: 12.5vh;
  cursor: pointer;

  h1 {
    font: normal 200 64px 'Lexend Deca', sans-serif;
    color: #000000;
  }

  img {
    width: 102px;
    height: 102;
  }
`

export { Nav, Logo }
