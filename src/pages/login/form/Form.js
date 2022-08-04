import { useState } from 'react'
import FormContainer from '../../../containers/form/FormContainer'
import Input from '../../../components/input/Input'
import InputIcon from '../../../components/inputIcon/InputIcon'
import Button from '../../../components/button/Button'
import signUp from '../../../services/api/signUp'

export default function Form({ navigate }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  function submit(event) {
    event.preventDefault()

    if (loading === true) return

    setLoading(true)

    const payload = { email, password }

    signUp(payload, setLoading, navigate)
  }

  return (
    <FormContainer submit={submit}>
      <Input
        placeholder="E-mail"
        value={email}
        onChange={setEmail}
        loading={loading}
      />
      <InputIcon
        placeholder="Senha"
        value={password}
        onChange={setPassword}
        loading={loading}
      />
      <Button name="Criar conta" loading={loading} />
    </FormContainer>
  )
}
