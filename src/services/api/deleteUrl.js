import { authApi } from './api'

export default function deleteUrl(id, global, links, setLinks) {
  const URL = `/urls/${id}`

  const promise = authApi(global.token).delete(URL)

  promise
    .then(() => setLinks(links.filter(link => link.id !== id)))
    .catch(() => console.log('não deletou'))
}
