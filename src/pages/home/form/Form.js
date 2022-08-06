import { useState } from 'react'
import FormContainer from '../../../containers/form/FormContainer'
import Input from '../../../components/input/Input'
import Button from '../../../components/button/Button'
import createLink from '../../../services/api/createLink'
import { InputContainer } from './styles'

export default function Form({ global, setGlobal, links, setLinks, navigate }) {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)

  function submit(event) {
    event.preventDefault()

    const useGlobal = { global, setGlobal }

    createLink(useGlobal, { url }, setLoading, links, setLinks, navigate)
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
