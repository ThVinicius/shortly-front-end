import { Link, useNavigate } from 'react-router-dom'
import { useGlobal } from '../../../context/globalContext'
import { Header } from './styles'

export default function Auth() {
  const navigate = useNavigate()
  const { global, setGlobal } = useGlobal()

  function logout() {
    setGlobal({ ...global, token: null })

    navigate('/')
  }

  return (
    <Header>
      <h6>Seja bem-vindo(a), Pessoa!</h6>
      <div>
        <Link to="/">
          <h5>Home</h5>
        </Link>
        <Link to="/ranking">
          <h5>Ranking</h5>
        </Link>
        <h5 onClick={logout}>Sair</h5>
      </div>
    </Header>
  )
}