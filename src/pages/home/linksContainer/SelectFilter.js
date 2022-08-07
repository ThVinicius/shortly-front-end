function SelectFilter({ search, linksFilter, links, select, setSelect }) {
  function hanleChangeSelect(e) {
    const value = e.target.value

    const arrFilter = search.length > 0 ? linksFilter.arr : links

    switch (value) {
      case '1':
        arrFilter.sort((a, b) => b.visitCount - a.visitCount)
        break

      case '2':
        arrFilter.sort((a, b) => a.visitCount - b.visitCount)
        break

      case '3':
        arrFilter.sort((a, b) => b.url < a.url)
        break

      case '4':
        arrFilter.sort((a, b) => a.url < b.url)
        break

      default:
        break
    }

    setSelect(value)
  }

  return (
    <select value={select} onChange={e => hanleChangeSelect(e)}>
      <option value="" disabled>
        Ordernar por:
      </option>
      <option value="1">Maior quantidade de visualizações</option>
      <option value="2">Menor quantidade de visualizações</option>
      <option value="3">Url por ordem alfabetiza [a-z]</option>
      <option value="4">Url por ordem alfabetiza [z-a]</option>
    </select>
  )
}

export default SelectFilter
