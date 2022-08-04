import { useState } from 'react'
import { useGlobal } from '../../../context/globalContext'
import FormContainer from '../../../containers/form/FormContainer'
import Input from '../../../components/input/Input'
import InputIcon from '../../../components/inputIcon/InputIcon'
import Button from '../../../components/button/Button'
import signIn from '../../../services/api/signIn'

export default function Form({ navigate }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { global, setGlobal } = useGlobal()

  function submit(event) {
    event.preventDefault()

    if (loading === true) return

    setLoading(true)

    const payload = { email, password }

    signIn(payload, navigate, setLoading, global, setGlobal)
  }

  return (
    <FormContainer submit={submit}>
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
      <Button name="Entrar" loading={loading} />
    </FormContainer>
  )
}
