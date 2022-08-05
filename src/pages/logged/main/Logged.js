import { useState } from 'react'
import { useGlobal } from '../../../context/globalContext'
import Form from '../form/Form'
import Links from '../links/Links'

export default function Logged() {
  const [links, setLinks] = useState(null)
  const { global, setGlobal } = useGlobal()

  return (
    <>
      <Form global={global} setLinks={setLinks} />
      <Links
        links={links}
        setLinks={setLinks}
        global={global}
        setGlobal={setGlobal}
      />
    </>
  )
}
