import styled from 'styled-components'
import { IoTrophySharp } from 'react-icons/io5'

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

export { IconContainer, TrophySharp }
