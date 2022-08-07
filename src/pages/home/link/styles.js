import styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'

const LinkContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  border: 1px solid rgba(120, 177, 89, 0.25);
  border-radius: 12px;

  span {
    width: calc(100% - 130px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #80cc74;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;
    cursor: pointer;

    h6 {
      max-width: 35%;
      font: normal 400 14px 'Lexend Deca', sans-serif;
      color: #ffffff;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    p {
      font: normal 400 14px 'Lexend Deca', sans-serif;
      color: #ffffff;
    }
  }

  div {
    width: 130px;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 0px 12px 12px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const TrashAlt = styled(FaTrashAlt)`
  width: 22px;
  height: 26px;
  color: #ea4f4f;
  cursor: pointer;
`

export { LinkContainer, TrashAlt }
