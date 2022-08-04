import { Link } from 'react-router-dom'
import { Header } from './styles'

export default function Anonymous() {
  return (
    <Header>
      <div>
        <Link to="/login">
          <h5>Entrar</h5>
        </Link>
        <Link to="/register">
          <h6>Cadastrar-se</h6>
        </Link>
      </div>
    </Header>
  )
}
