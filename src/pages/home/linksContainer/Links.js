import { useState } from 'react'
import Link from '../link/Link'
import { RotatingLines } from 'react-loader-spinner'
import { Container, InputContainer, Search } from './styles'
import SearchInput from './SearchInput'
import SelectFilter from './SelectFilter'

export default function Links({ links, setLinks, global }) {
  const [search, setSearch] = useState('')
  const [select, setSelect] = useState('')
  const [linksFilter] = useState({ arr: [] })
  const [displayInputs, setDisplayInputs] = useState(false)

  const linkContainer = array =>
    array.map((link, index) => (
      <Link
        link={link}
        links={links}
        setLinks={setLinks}
        global={global}
        linksFilter={linksFilter}
        key={index}
      />
    ))

  const listLink = () =>
    search.length > 0 ? linkContainer(linksFilter.arr) : linkContainer(links)

  function displaySearch() {
    if (displayInputs === false) return { top: '-70px', index: '-1' }

    return { top: '0', index: '0' }
  }

  const spinnerLoading = <RotatingLines strokeColor="#5D9040" />

  return (
    <Container>
      {links === null ? (
        spinnerLoading
      ) : (
        <>
          <InputContainer
            top={displaySearch().top}
            zIndex={displaySearch().index}
          >
            <div>
              <SearchInput
                search={search}
                setSearch={setSearch}
                links={links}
                linksFilter={linksFilter}
              />
              <SelectFilter
                select={select}
                setSelect={setSelect}
                search={search}
                linksFilter={linksFilter}
                links={links}
              />
            </div>
            <Search onClick={() => setDisplayInputs(!displayInputs)} />
          </InputContainer>
          {listLink()}
        </>
      )}
    </Container>
  )
}
