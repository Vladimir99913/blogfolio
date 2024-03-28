import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../../redux/posts-slice'

export function Sort() {
  const dispatch = useDispatch()
  const [sort, setSort] = useState('')

  useEffect(() => {
    dispatch(fetchData({ ordering: sort }))
  }, [dispatch, sort])

  function handleChangeSort(event) {
    setSort(event.target.value)
    console.log(event.target.value)
  }

  return (
    <select className="form-select form-select-lg mb-3 w-75" onChange={handleChangeSort}>
      <option>Open this select menu</option>
      <option value="date" >date</option>
      <option value="title" >title</option>
      <option value="text">text</option>
      <option value="lesson_num">lesson_num</option>
    </select>
  )
}
