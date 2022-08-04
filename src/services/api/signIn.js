import { api } from './api'
import { UNAUTHORIZED, UNPROCESSABLE_ENTITY } from '../../constants/HTTP'

export default function signIn(
  payload,
  navigate,
  setLoading,
  global,
  setGlobal
) {
  const URL = '/signin'

  const promise = api.post(URL, payload)

  promise
    .then(({ data }) => {
      setGlobal({ ...global, token: data })

      navigate('/')
    })
    .catch(({ response }) => {
      console.log(response)

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
