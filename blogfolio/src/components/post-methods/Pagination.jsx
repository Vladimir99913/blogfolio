import { NavLink } from 'react-router-dom';

export function Pagination(props) {
  const pagesCounter = props.pagesCounter

  function buildPaginationScheme() {
    const prevPageNumber = +props.pageNumberCurrent - 1 // предполагаемая предыдущая страница, может получиться отрицательной
    const nextPageNumber = +props.pageNumberCurrent + 1 // предполагаемая следующая страница, может получиться больше максимальной
    const scheme = [1, prevPageNumber, +props.pageNumberCurrent, nextPageNumber, pagesCounter] // строим схему
    const filteredScheme = scheme.filter(item => item > 0 && item <= pagesCounter) // чистим те, которые меньше 0 или больше pagesCounter
    const set = new Set(filteredScheme) // удаляем дубли
    const result = Array.from(set) // обратно приводим к массиву

    if (result[0] + 1 !== result[1]) result.splice(1, 0, '...') // если между первым и вторым элементом пропуск, вставляем ...
    if (result.at(-2) + 1 !== result.at(-1)) result.splice(result.length - 1, 0, '...') // если между последним и предпоследним пропуск, вставляем ...

    return result
  }

  function renderPagination() {
    const paginationScheme = buildPaginationScheme()

    return paginationScheme.map((pageNumber, index) => {

      if (pageNumber == '...') {
        return (
          <li className="page-item" key={index}>
            <span className="page-link pe-none">{pageNumber}</span>
          </li>
        )
      }

      return (
        <li className="page-item" key={index}>
          <NavLink to={`${props.url}${pageNumber}`} className={({ isActive }) =>
            isActive ? 'page-link active' : 'page-link'
          }>
            {pageNumber}
          </NavLink>
        </li>
      )
    })
  }
  return renderPagination()
}

