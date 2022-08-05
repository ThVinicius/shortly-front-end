import { useNavigate } from 'react-router-dom'
import Form from '../form/Form'

export default function Login() {
  const navigate = useNavigate()

  return (
    <>
      <Form navigate={navigate} />
    </>
  )
}
