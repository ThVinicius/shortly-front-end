import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 19px;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px 24px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  ol {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 19px;
    gap: 13px;
    list-style-type: decimal;

    li {
      font: normal 500 22px 'Lexend Deca', sans-serif;
      color: #000000;
    }
  }
`

export { Container }
