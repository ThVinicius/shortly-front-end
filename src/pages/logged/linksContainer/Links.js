import { useEffect } from 'react'
import getLinks from '../../../services/api/getLinks'
import Link from '../link/Link'
import { RotatingLines } from 'react-loader-spinner'
import { Container } from './styles'

function Links({ links, setLinks, global, setGlobal, navigate }) {
  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token !== null && global.token === null) {
      global.token = JSON.parse(token)
    }

    getLinks(global, setLinks, setGlobal, navigate)
  }, [])

  const spinner = <RotatingLines strokeColor="#5D9040" />

  const linkList = () =>
    links.map((link, index) => (
      <Link
        link={link}
        links={links}
        setLinks={setLinks}
        global={global}
        key={index}
      />
    ))

  return <Container>{links === null ? spinner : linkList()}</Container>
}

export default Links
