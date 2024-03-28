import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { CardSearch } from '../components/card/CardSearch'
import { CardLarge } from '../components/card/CardLarge';
import { CardMiddle } from '../components/card/CardMiddle';
import { fetchData } from '../redux/posts-slice'
import { NavLink, useNavigate, useParams } from 'react-router-dom';

export function CardSearchList() {
  const dispatch = useDispatch()
  const { query } = useParams()
  const isLoading = useSelector((state) => state.posts.isLoading)
  const data = useSelector(state => state.posts.data)

  useEffect(() => {
    dispatch(fetchData({ search: query, limit: 99999 }))
  }, [dispatch, query])

  function renderContent() {
    if (data.length == 0) {
      console.log('12312')
      return <h1 className="text-danger">Результатов нет</h1>
    }

    if (isLoading) {
      return <div>Loading...</div>
    }
    return (
      <>
        {/* <Title title={postById.title} btnBack="Home" id={` | Post  ${postById.id}`} /> */}
        <div className="row row-cols-1 row-cols-md-3 w-75">
          {data.map((post, index) => <CardMiddle key={index} {...post} />)}
        </div>
        {/* <CardLarge {...data} /> */}
      </>
    )
  }

  return (
    renderContent()
  )
}


//   return (
//     <>
//       {languageValue.map((item, index) => <CardSearch key={index} date={item.date} title={item.title} />)}
//     </>
//   )
// }
