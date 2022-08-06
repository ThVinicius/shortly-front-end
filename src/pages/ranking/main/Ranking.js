import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../../../context/globalContext'
import getRanking from '../../../services/api/getRanking'
import RankingList from '../rankingList/RankingList'
import { IconContainer, TrophySharp } from './styles'

export default function Ranking() {
  const [ranking, setRanking] = useState(null)
  const { global } = useGlobal()
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token !== null && global.token === null) {
      global.token = JSON.parse(token)

      return navigate('/logged')
    }

    getRanking(setRanking)
  }, [])

  return (
    <>
      <IconContainer>
        <TrophySharp />
        <h6>Ranking</h6>
      </IconContainer>
      <RankingList ranking={ranking} />
    </>
  )
}
