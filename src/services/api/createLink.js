import { authApi } from './api'
import getLinks from './getLinks'
import logout from '../../utils/logout'
import { CONFLICT, TOKEN_EXPIRED, UNAUTHORIZED } from '../../constants/HTTP'
import { UPGRADE_REQUIRED } from '../../constants/HTTP'

function createLink(useGlobal, payload, setLoading, links, setLinks, navigate) {
  const { global, setGlobal } = useGlobal

  const backUpLinks = links

  setLinks(null)

  const URL = '/urls/shorten'

  const promise = authApi(global.token).post(URL, payload)

  promise
    .then(() => {
      getLinks(global, setLinks, setGlobal, navigate)

      setLoading(false)
    })
    .catch(({ response }) => {
      switch (response.status) {
        case CONFLICT:
          alert(`Não é possivel encurta a mesma url mais de uma vez!`)
          break

        case UNAUTHORIZED:
          alert(`Faça o login para acessar essa área!`)

          logout(global, setGlobal, navigate)
          break

        case TOKEN_EXPIRED:
          alert(`Sua sessão expirou!\nPor favor faça o login novamente`)

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

      setLinks(backUpLinks)

      setLoading(false)
    })
}

export default createLink
