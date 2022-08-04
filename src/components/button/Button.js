import { Container } from './styles'
import { ThreeDots } from 'react-loader-spinner'

export default function Button({
  name,
  width = '182px',
  height = '60px',
  backgroundColor = '#5D9040',
  loading = false
}) {
  function loadingButton() {
    if (loading === false) return { opacity: 1, name }

    return {
      opacity: 0.7,
      name: <ThreeDots color="#FFFFFF" height={20} width={99} />
    }
  }

  return (
    <Container
      type="submit"
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      opacity={loadingButton().opacity}
    >
      {loadingButton().name}
    </Container>
  )
}
