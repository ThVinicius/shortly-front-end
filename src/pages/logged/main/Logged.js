import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../../../context/globalContext'
import Form from '../form/Form'
import Links from '../linksContainer/Links'

export default function Logged() {
  const [links, setLinks] = useState(null)
  const { global, setGlobal } = useGlobal()
  const navigate = useNavigate()

  return (
    <>
      <Form
        global={global}
        setGlobal={setGlobal}
        links={links}
        setLinks={setLinks}
        navigate={navigate}
      />
      <Links
        links={links}
        setLinks={setLinks}
        global={global}
        setGlobal={setGlobal}
        navigate={navigate}
      />
    </>
  )
}
