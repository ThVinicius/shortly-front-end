import styled from 'styled-components'
import { IoTrophySharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const IconContainer = styled.div`
  display: flex;
  margin-bottom: 57px;

  h6 {
    font: normal 700 36px 'Lexend Deca', sans-serif;
    color: #000000;
  }
`

const TrophySharp = styled(IoTrophySharp)`
  width: 56px;
  height: 50px;
  color: #ffd233;
`

const Anchor = styled(Link)`
  font: normal 700 36px 'Lexend Deca', sans-serif;
  color: #000000;
  margin-top: 5vh;
  padding-bottom: 20px;
  cursor: pointer;
`

export { IconContainer, TrophySharp, Anchor }
