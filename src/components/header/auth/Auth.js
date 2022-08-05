import { Link, useNavigate } from 'react-router-dom'
import { useGlobal } from '../../../context/globalContext'
import { Header } from './styles'

export default function Auth() {
  const navigate = useNavigate()
  const { global, setGlobal } = useGlobal()

  function logout() {
    setGlobal({ ...global, token: null, customer: null })

    navigate('/')
  }

  return (
    <Header>
      <h6>Seja bem-vindo(a), {global.customer.name}!</h6>
      <div>
        <Link to="/logged">
          <h5>Home</h5>
        </Link>
        <Link to="/">
          <h5>Ranking</h5>
        </Link>
        <h5 onClick={logout}>Sair</h5>
      </div>
    </Header>
  )
}
