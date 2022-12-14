import { api } from './api'
import { UNAUTHORIZED, UNPROCESSABLE_ENTITY } from '../../constants/HTTP'

export default function signIn(payload, navigate, setLoading, setGlobal) {
  const URL = '/signin'

  const promise = api.post(URL, payload)

  promise
    .then(({ data }) => {
      setGlobal(prevGlobal => ({ ...prevGlobal, token: data }))

      const tokenStringify = JSON.stringify(data)
      localStorage.setItem('token', tokenStringify)

      navigate('/home')
    })
    .catch(({ response }) => {
      switch (response.status) {
        case UNAUTHORIZED:
          alert('Email ou senha inválido')
          break

        case UNPROCESSABLE_ENTITY:
          let message = ''

          for (const err of response.data) {
            message += err + '\n'
          }

          alert(message)
          break

        default:
          break
      }

      setLoading(false)
    })
}
