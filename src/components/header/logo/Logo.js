import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.svg'
import { Container } from './styles'

export default function Logo() {
  const navigate = useNavigate()

  return (
    <Container onClick={() => navigate('/')}>
      <h1>Shortly</h1>
      <img src={logo} alt="logo" />
    </Container>
  )
}
