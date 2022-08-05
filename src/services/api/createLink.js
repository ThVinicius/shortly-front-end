import { authApi } from './api'
import getLinks from './getLinks'
import { CONFLICT } from '../../constants/HTTP'

function createLink(global, payload, setLoading, links, setLinks) {
  const backUpLinks = links

  setLinks(null)

  const URL = '/urls/shorten'

  const promise = authApi(global.token).post(URL, payload)

  promise
    .then(() => {
      getLinks(global, setLinks, null)

      setLoading(false)
    })
    .catch(({ response }) => {
      if (response.status === CONFLICT) {
        alert(`Não é possivel encurta a mesma url mais de uma vez!`)
      } else {
        alert('Ocorreu um  erro inesperado, tente mais tarde')
      }

      setLinks(backUpLinks)

      setLoading(false)
    })
}

export default createLink
