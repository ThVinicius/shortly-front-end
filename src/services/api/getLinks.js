import { authApi } from './api'

export default function getLinks(global, setLinks, setGlobal) {
  const URL = '/users/me'

  const promise = authApi(global.token).get(URL)

  promise
    .then(({ data }) => {
      setLinks(data.shortenedUrls)

      if (setGlobal !== null) {
        delete data.shortenedUrls

        setGlobal({ ...global, customer: data })
      }
    })
    .catch(err => console.log(err))
}
