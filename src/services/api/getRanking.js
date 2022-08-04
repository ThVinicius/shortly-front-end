import { api } from './api'

export default function getRanking(setRanking) {
  const URL = '/ranking'

  const promise = api.get(URL)

  promise.then(({ data }) => setRanking(data)).catch(err => console.log(err))
}
