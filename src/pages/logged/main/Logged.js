import { useState } from 'react'
import { useGlobal } from '../../../context/globalContext'
import Form from '../form/Form'
import Links from '../linksContainer/Links'

export default function Logged() {
  const [links, setLinks] = useState(null)
  const { global, setGlobal } = useGlobal()

  return (
    <>
      <Form global={global} links={links} setLinks={setLinks} />
      <Links
        links={links}
        setLinks={setLinks}
        global={global}
        setGlobal={setGlobal}
      />
    </>
  )
}
