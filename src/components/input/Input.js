import { Container } from './styles'

export default function Input(props) {
  const { type = 'text', width = '53.40vw', height = '60px' } = props
  const { loading = false, minLength = '', maxLength = '' } = props
  const { placeholder, value, onChange } = props

  function loadingInput() {
    if (loading === false) return { backGround: '#ffffff', disabled: false }

    return { backGround: '#F2F2F2', disabled: true }
  }

  return (
    <Container
      height={height}
      width={width}
      backGround={loadingInput().backGround}
      type={type}
      required
      minLength={minLength}
      maxLength={maxLength}
      disabled={loadingInput().disabled}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}
