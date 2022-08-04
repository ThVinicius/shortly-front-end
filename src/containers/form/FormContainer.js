import { Container } from './styles'

export default function FormContainer({ children, submit }) {
  return <Container onSubmit={submit}>{children}</Container>
}
