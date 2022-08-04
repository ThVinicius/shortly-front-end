import { useGlobal } from '../../../context/globalContext'

export default function Home() {
  const { global } = useGlobal()

  console.log(global)
  return <h1>Home</h1>
}
