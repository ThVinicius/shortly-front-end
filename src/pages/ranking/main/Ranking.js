import { useEffect, useState } from 'react'
import getRanking from '../../../services/api/getRanking'
import Logo from '../../../components/logo/Logo'
import RankingList from '../rankingList/RankingList'
import { IconContainer, TrophySharp } from './styles'

export default function Ranking() {
  const [ranking, setRanking] = useState(null)

  useEffect(() => {
    getRanking(setRanking)
  }, [])

  return (
    <>
      <Logo />
      <IconContainer>
        <TrophySharp />
        <h6>Ranking</h6>
      </IconContainer>
      <RankingList ranking={ranking} />
    </>
  )
}
