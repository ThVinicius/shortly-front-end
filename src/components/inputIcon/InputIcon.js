import { useState } from 'react'
import { InputBox, Eye, EyeSlash } from './styles'

export default function InputIcon({
  placeholder,
  width = '53.40vw',
  height = '60px',
  loading = false,
  value,
  onChange
}) {
  const [hidden, setHidden] = useState(true)

  function loadingInput() {
    if (loading === false) return { backGround: '#ffffff', disabled: false }

    return { backGround: '#F2F2F2', disabled: true }
  }

  function hiddenPassword() {
    if (hidden === false) {
      return { icon: <Eye />, type: 'text' }
    }

    return {
      icon: <EyeSlash />,
      type: 'password'
    }
  }

  return (
    <InputBox
      width={width}
      height={height}
      backGround={loadingInput().backGround}
    >
      <input
        type={hiddenPassword().type}
        placeholder={placeholder}
        required
        disabled={loadingInput().disabled}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <div onClick={() => setHidden(!hidden)}>{hiddenPassword().icon}</div>
    </InputBox>
  )
}
