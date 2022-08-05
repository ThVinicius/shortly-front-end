import { useNavigate } from 'react-router-dom'
import Form from '../form/Form'

export default function Register() {
  const navigate = useNavigate()

  return (
    <>
      <Form navigate={navigate} />
    </>
  )
}
