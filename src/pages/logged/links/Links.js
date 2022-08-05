import { useEffect } from 'react'
import getLinks from '../../../services/api/getLinks'
import deleteUrl from '../../../services/api/deleteUrl'
import { RotatingLines } from 'react-loader-spinner'
import { Container, LinkContainer, TrashAlt } from './styles'

export default function Links({ links, setLinks, global, setGlobal }) {
  useEffect(() => {
    getLinks(global, setLinks, setGlobal)
  }, [])

  function openLink(id, shortUrl) {
    setLinks(
      links.map(item => {
        if (item.id === id) return { ...item, visitCount: item.visitCount + 1 }

        return item
      })
    )

    const URL = `${process.env.REACT_APP_API_URL}/urls/open/${shortUrl}`

    return window.open(URL, '_blank', 'noopener,noreferrer')
  }

  const link = (id, url, shortUrl, visitCount, index) => (
    <LinkContainer key={index}>
      <span onClick={() => openLink(id, shortUrl)}>
        <p>{url}</p>
        <p>{shortUrl}</p>
        <p>Quantidade de visitantes: {visitCount}</p>
      </span>
      <div>
        <TrashAlt onClick={() => deleteUrl(id, global, links, setLinks)} />
      </div>
    </LinkContainer>
  )

  const spinner = <RotatingLines strokeColor="#5D9040" />

  const linkList = () =>
    links.map(({ id, url, shortUrl, visitCount }, index) =>
      link(id, url, shortUrl, visitCount, index)
    )

  const loading = () => (links === null ? spinner : linkList())
  return <Container>{loading()}</Container>
}
