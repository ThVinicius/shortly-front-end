import { authApi } from './api'
import logout from '../../utils/logout'
import { TOKEN_EXPIRED, UNAUTHORIZED } from '../../constants/HTTP'
import { UPGRADE_REQUIRED } from '../../constants/HTTP'

export default function getLinks(global, setLinks, setGlobal, navigate) {
  const URL = '/users/me'

  const promise = authApi(global.token).get(URL)

  promise
    .then(({ data }) => {
      setLinks(data.shortenedUrls)

      if (global.customer === null) {
        delete data.shortenedUrls

        setGlobal({ ...global, customer: data })
      }
    })
    .catch(({ response }) => {
      switch (response.status) {
        case TOKEN_EXPIRED:
          alert(`Sua sessão expirou!\nPor favor faça o login novamente`)

          logout(setGlobal, navigate)
          break

        case UNAUTHORIZED:
          alert(`Faça o login para acessar essa área!`)

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
    })
}
