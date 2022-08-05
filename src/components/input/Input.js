import { Container } from './styles'

export default function Input({
  type = 'text',
  placeholder,
  width = '53.40vw',
  height = '60px',
  loading = false,
  minLength = '',
  value,
  onChange
}) {
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
      maxLength={minLength}
      disabled={loadingInput().disabled}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}
