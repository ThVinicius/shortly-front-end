import Input from '../../../components/input/Input'

export default function SearchInput({ search, setSearch, links, linksFilter }) {
  function hanleChangeSearch(e) {
    linksFilter.arr = links.filter(({ url }) => url.includes(e))

    setSearch(e)
  }

  return (
    <Input
      placeholder="Pesquisar pela url"
      width="60%"
      value={search}
      onChange={hanleChangeSearch}
    />
  )
}
