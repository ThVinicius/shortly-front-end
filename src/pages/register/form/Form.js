import { useState } from 'react'
import FormContainer from '../../../containers/form/FormContainer'
import Input from '../../../components/input/Input'
import InputIcon from '../../../components/inputIcon/InputIcon'
import Button from '../../../components/button/Button'
import signUp from '../../../services/api/signUp'

export default function Form({ navigate }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  function submit(event) {
    event.preventDefault()

    if (loading === true) return

    setLoading(true)

    const payload = { name, email, password, confirmPassword }

    signUp(payload, setLoading, navigate)
  }

  return (
    <FormContainer submit={submit}>
      <Input
        placeholder="Nome"
        maxLength="48"
        value={name}
        onChange={setName}
        loading={loading}
      />
      <Input
        placeholder="E-mail"
        type="email"
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
      <InputIcon
        placeholder=" Confirmar senha"
        value={confirmPassword}
        onChange={setConfirmPassword}
        loading={loading}
      />
      <Button name="Criar conta" loading={loading} />
    </FormContainer>
  )
}
