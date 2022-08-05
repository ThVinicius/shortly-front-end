import { authApi } from './api'

export default function deleteUrl(id, global, links, setLinks, setLoading) {
  setLoading(true)

  const URL = `/urls/${id}`

  const promise = authApi(global.token).delete(URL)

  promise
    .then(() => setLinks(links.filter(link => link.id !== id)))
    .catch(() => {
      alert('Ocorreu um erro inesperado, tente mais tarde')

      setLoading(false)
    })
}
