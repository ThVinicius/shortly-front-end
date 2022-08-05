import { useState } from 'react'
import { useGlobal } from '../../../context/globalContext'
import deleteUrl from '../../../services/api/deleteUrl'
import { TailSpin } from 'react-loader-spinner'
import { TrashAlt } from './styles'

export default function DeleteLink({ link, links, setLinks }) {
  const [loading, setLoading] = useState(false)
  const { global } = useGlobal()
  const { id, url } = link

  function confirmDelete() {
    if (loading === true) return

    const confirm = window.confirm(
      `O link da url ${url} será apagado!\nVocê confirma essa ação?`
    )

    if (confirm) deleteUrl(id, global, links, setLinks, setLoading)
  }

  const spinner = <TailSpin height="45" width="45" color="#4fa94d" />

  return loading === true ? spinner : <TrashAlt onClick={confirmDelete} />
}
