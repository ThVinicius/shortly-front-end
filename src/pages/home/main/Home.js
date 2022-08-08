import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../../../context/globalContext'
import getLinks from '../../../services/api/getLinks'
import Form from '../form/Form'
import Links from '../linksContainer/Links'

export default function Home() {
  const { global, setGlobal } = useGlobal()
  const [links, setLinks] = useState(null)
  const [search, setSearch] = useState('')
  const [displayInputs, setDisplayInputs] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token !== null && global.token === null) {
      global.token = JSON.parse(token)
    }

    getLinks(global, setLinks, setGlobal, navigate)
  }, [])

  return (
    <>
      <Form
        globalProps={{ global, setGlobal }}
        linksProps={{ links, setLinks }}
        navigate={navigate}
        auxProps={{ setSearch, setDisplayInputs }}
      />
      <Links
        linksProps={{ links, setLinks }}
        global={global}
        searchProps={{ search, setSearch }}
        displayProps={{ displayInputs, setDisplayInputs }}
      />
    </>
  )
}
