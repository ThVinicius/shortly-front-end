import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.svg'
import Form from '../form/Form'
import { Logo } from './styles'

export default function Register() {
  const navigate = useNavigate()

  return (
    <>
      <Logo onClick={() => navigate('/')}>
        <h1>Shortly</h1>
        <img src={logo} alt="logo" />
      </Logo>
      <Form navigate={navigate} />
    </>
  )
}
