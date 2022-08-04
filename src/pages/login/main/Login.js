import { useNavigate } from 'react-router-dom'
import Logo from '../../../components/logo/Logo'
import Form from '../form/Form'

export default function Login() {
  const navigate = useNavigate()

  return (
    <>
      <Logo />
      <Form navigate={navigate} />
    </>
  )
}
