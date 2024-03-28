import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Title } from '../components/Title'
import { fetchDataById } from '../redux/posts-slice'
import { CardLarge } from '../components/card/CardLarge'

export function CardPost() {
  const { id } = useParams()
  const isLoading = useSelector((state) => state.posts.isLoading)
  const error = useSelector((state) => state.posts.error)
  const postById = useSelector(state => state.posts.dataById)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDataById(id))
  }, [id])

  function renderContent() {
    if (error) {
      return <div className="text-danger">Error: {error}</div>
    }

    if (isLoading) {
      return <div>Loading...</div>
    }
    return (
      <>
        <Title title={postById.title} btnBack="Home" id={` | Post  ${postById.id}`} />
        <CardLarge {...postById} />
      </>
    )
  }

  return (
    renderContent()
  )
}
