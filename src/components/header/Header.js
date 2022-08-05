import { useGlobal } from '../../context/globalContext'
import Auth from './auth/Auth'
import Anonymous from './anonymous/Anonymous'
import Logo from './logo/Logo'

export default function Header() {
  const { global } = useGlobal()

  const nav = global.customer === null ? <Anonymous /> : <Auth />

  return (
    <>
      {nav}
      <Logo />
    </>
  )
}
