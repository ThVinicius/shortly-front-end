import { api } from './api'

export default function signUp(payload, setLoading, navigate) {
  const URL = '/signup'

  const promise = api.post(URL, payload)

  promise
    .then(() => {
      alert('Cadastro realizado com sucesso!')

      navigate('/login')
    })
    .catch(res => {
      console.log(res)
      setLoading(false)
    })
}
