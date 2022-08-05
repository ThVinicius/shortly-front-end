import { authApi } from './api'
import getLinks from './getLinks'

export default function createLink(global, payload, setLoading, setLinks) {
  setLinks(null)

  const URL = '/urls/shorten'

  const promise = authApi(global.token).post(URL, payload)

  promise
    .then(() => {
      getLinks(global, setLinks, null)

      setLoading(false)
    })
    .catch(err => {
      console.log(err)

      setLoading(false)
    })
}
