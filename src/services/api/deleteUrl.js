import { authApi } from './api'
import logout from '../../utils/logout'
import { TOKEN_EXPIRED, UNAUTHORIZED } from '../../constants/HTTP'
import { UPGRADE_REQUIRED } from '../../constants/HTTP'

function deleteUrl(id, useGlobal, aux, setLoading, navigate, linksFilter) {
  setLoading(true)

  const { global, setGlobal } = useGlobal

  const { links, setLinks } = aux

  const URL = `/urls/${id}`

  const promise = authApi(global.token).delete(URL)

  promise
    .then(() => {
      setLoading(false)

      if (linksFilter.arr.length > 0) {
        linksFilter.arr = linksFilter.arr.filter(link => link.id !== id)
      }

      setLinks(links.filter(link => link.id !== id))
    })
    .catch(({ response }) => {
      switch (response.status) {
        case TOKEN_EXPIRED:
          alert(`Sua sessão expirou!\nPor favor faça o login novamente`)

          logout(global, setGlobal, navigate)
          break

        case UNAUTHORIZED:
          alert(`Faça o login para acessar essa área!`)

          logout(global, setGlobal, navigate)
          break

        case UPGRADE_REQUIRED:
          alert(
            `Ocorreu um erro com sua autenticação, por favor faça o login novamente`
          )

          logout(global, setGlobal, navigate)
          break

        default:
          alert('Ocorreu um  erro inesperado, tente mais tarde')
          break
      }

      setLoading(false)
    })
}

export default deleteUrl
