import { api } from './api'
import { CONFLICT, UNPROCESSABLE_ENTITY } from '../../constants/HTTP'

export default function signUp(payload, setLoading, navigate) {
  const URL = '/signup'

  const promise = api.post(URL, payload)

  promise
    .then(() => {
      alert('Cadastro realizado com sucesso!')

      navigate('/login')
    })
    .catch(({ response }) => {
      switch (response.status) {
        case CONFLICT:
          alert(
            'Esse email já está em uso!\nescolha outro para prosseguir com o cadastro'
          )
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
