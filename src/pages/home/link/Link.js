import DeleteLink from './DeleteLink'
import { LinkContainer } from './styles'

export default function Link({ link, links, setLinks, linksFilter }) {
  const { id, shortUrl, url, visitCount } = link

  return (
    <LinkContainer>
      <span onClick={() => openLink(id, shortUrl, links, setLinks)}>
        <h6>{url}</h6>
        <p>{shortUrl}</p>
        <p>Quantidade de visitantes: {visitCount}</p>
      </span>
      <div>
        <DeleteLink
          link={link}
          links={links}
          setLinks={setLinks}
          linksFilter={linksFilter}
        />
      </div>
    </LinkContainer>
  )
}

function openLink(id, shortUrl, links, setLinks) {
  setLinks(
    links.map(item => {
      if (item.id === id) return { ...item, visitCount: item.visitCount + 1 }

      return item
    })
  )

  const URL = `${process.env.REACT_APP_API_URL}/urls/open/${shortUrl}`

  return window.open(URL, '_blank', 'noopener,noreferrer')
}
