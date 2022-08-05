import { RotatingLines } from 'react-loader-spinner'
import { Container } from './styles'

export default function RankingList({ ranking }) {
  const spinner = <RotatingLines strokeColor="#5D9040" />

  const rankingList = () =>
    ranking.map(({ name, linksCount, visitCount }, index) => (
      <li key={index}>
        {name} - {linksCount} links - {visitCount} visualizações
      </li>
    ))

  const rankingLoading = () =>
    ranking === null ? spinner : <ol>{rankingList()}</ol>

  return <Container>{rankingLoading()}</Container>
}
