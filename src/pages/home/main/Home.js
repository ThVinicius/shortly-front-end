import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../../../context/globalContext'
import getLinks from '../../../services/api/getLinks'
import Form from '../form/Form'
import Links from '../linksContainer/Links'

export default function Home() {
  const [links, setLinks] = useState(null)
  const { global, setGlobal } = useGlobal()
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
        global={global}
        setGlobal={setGlobal}
        links={links}
        setLinks={setLinks}
        navigate={navigate}
      />
      <Links links={links} setLinks={setLinks} global={global} />
    </>
  )
}
