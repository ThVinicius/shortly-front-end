import { useState } from 'react'
import { useGlobal } from '../../../context/globalContext'
import { useNavigate } from 'react-router-dom'
import deleteUrl from '../../../services/api/deleteUrl'
import { TailSpin } from 'react-loader-spinner'
import { TrashAlt } from './styles'

export default function DeleteLink({ link, links, setLinks, linksFilter }) {
  const [loading, setLoading] = useState(false)
  const { global, setGlobal } = useGlobal()
  const navigate = useNavigate()
  const { id, url } = link

  function confirmDelete() {
    if (loading === true) return

    const confirm = window.confirm(
      `O link da url ${url} será apagado!\nVocê confirma essa ação?`
    )

    const useGlobal = { global, setGlobal }

    if (confirm)
      deleteUrl(id, useGlobal, setLinks, setLoading, navigate, linksFilter)
  }

  const spinner = <TailSpin height="45" width="45" color="#4fa94d" />

  return loading === true ? spinner : <TrashAlt onClick={confirmDelete} />
}
