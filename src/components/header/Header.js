import { useGlobal } from '../../context/globalContext'
import Auth from './auth/Auth'
import Anonymous from './anonymous/Anonymous'

export default function Header() {
  const { global } = useGlobal()

  return global.token === null ? <Anonymous /> : <Auth />
}
