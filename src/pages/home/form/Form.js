import { useState } from 'react'
import FormContainer from '../../../containers/form/FormContainer'
import Input from '../../../components/input/Input'
import Button from '../../../components/button/Button'
import createLink from '../../../services/api/createLink'
import { InputContainer } from './styles'

export default function Form({ globalProps, linksProps, navigate, auxProps }) {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const { global, setGlobal } = globalProps
  const { links, setLinks } = linksProps

  function submit(event) {
    event.preventDefault()
    if (loading === true) return

    setLoading(true)

    const useGlobal = { global, setGlobal }

    const linksProps = { links, setLinks }

    createLink(useGlobal, { url }, setLoading, linksProps, navigate, auxProps)
  }

  return (
    <FormContainer submit={submit}>
      <InputContainer>
        <Input
          placeholder="Links que cabem no bolso"
          type="url"
          value={url}
          onChange={setUrl}
          loading={loading}
        />
        <Button name="Encurtar link" loading={loading} />
      </InputContainer>
    </FormContainer>
  )
}
