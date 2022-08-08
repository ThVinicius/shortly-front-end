import { authApi } from './api'
import getLinks from './getLinks'
import logout from '../../utils/logout'
import { CONFLICT, TOKEN_EXPIRED, UNAUTHORIZED } from '../../constants/HTTP'
import { UPGRADE_REQUIRED } from '../../constants/HTTP'

function createLink(useGlobal, payload, setLoading, linksProps, navigate, aux) {
  const { global, setGlobal } = useGlobal
  const { links, setLinks } = linksProps
  const { setSearch, setDisplayInputs } = aux

  const backUpLinks = links

  setLinks(null)

  const URL = '/urls/shorten'

  const promise = authApi(global.token).post(URL, payload)

  promise
    .then(() => {
      getLinks(global, setLinks, setGlobal, navigate)

      setSearch('')
      setDisplayInputs(false)

      setLoading(false)
    })
    .catch(({ response }) => {
      switch (response.status) {
        case CONFLICT:
          alert(`Não é possivel encurta a mesma url mais de uma vez!`)
          break

        case UNAUTHORIZED:
          alert(`Faça o login para acessar essa área!`)

          logout(setGlobal, navigate)
          break

        case TOKEN_EXPIRED:
          alert(`Sua sessão expirou!\nPor favor faça o login novamente`)

          logout(setGlobal, navigate)
          break

        case UPGRADE_REQUIRED:
          alert(
            `Ocorreu um erro com sua autenticação, por favor faça o login novamente`
          )

          logout(setGlobal, navigate)
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
