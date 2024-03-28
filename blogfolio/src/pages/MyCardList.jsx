import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Title } from '../components/Title'
import { text } from '../config/language/index.js'
import { CardMiddle } from '../components/card/CardMiddle'
import { Tabs } from '../components/card/Tabs'
import { ImagePreviewModal } from '../components/ImagePreviewModal'
import { hideModal } from '../redux/image-preview-slice'
import { useParams } from 'react-router-dom';
import { fetchMyData } from '../redux/my-posts-slice'
import { Pagination } from '../components/post-methods/Pagination'

export function MyCardList() {
  const dispatch = useDispatch()
  const { pageNumber: pageNumberCurrent } = useParams()
  const pagesCounter = useSelector(state => state.myPosts.pagesCounter)
  console.log(pageNumberCurrent)
  const shownModal = useSelector(state => state.image.shownModal)
  const activeTab = useSelector(state => state.tabs.value)
  const language = useSelector((state) => state.language.value)
  const isLoading = useSelector((state) => state.myPosts.isLoading)
  const error = useSelector((state) => state.myPosts.error)
  const posts = useSelector(state => state.myPosts.data)
  const favoritesPosts = posts.filter(item => item.isFavorite)
  const popularPosts = posts.filter(item => item.like > 10)
  const TabsValue = text[language].tabs

  useEffect(() => {
    dispatch(fetchMyData({ pageNumber: pageNumberCurrent }))
  }, [dispatch, pageNumberCurrent])


  function onHidden() {
    dispatch(hideModal())
  }

  function renderContent() {
    switch (activeTab) {
      case 'tab1':
        if (error) {
          return <div className="text-danger">Error: {error}</div>
        }
        if (isLoading) {
          return <div>Loading...</div>
        }
        return <>
          <div className="row row-cols-1 row-cols-md-3 w-75">
            {posts.map((post, index) => <CardMiddle key={index} {...post} />)}
          </div>
          <nav>
            <ul className="pagination mt-3">
              <Pagination pageNumberCurrent={pageNumberCurrent} pagesCounter={pagesCounter} url={'/my-posts/page/'} />
            </ul>
          </nav>
        </>
      case 'tab2':
        return <div className="row row-cols-1 row-cols-md-3 w-75">
          {favoritesPosts.map((favorite, index) => <CardMiddle key={index} {...favorite} />)}
        </div>
      case 'tab3':
        return <div className="row row-cols-1 row-cols-md-3 w-75">
          {popularPosts.map((popular, index) => <CardMiddle key={index} {...popular} />)}
        </div>
      default:
        return null
    }
  }

  return (
    <>
      <Title title="blog" />
      <Tabs {...TabsValue} />
      {renderContent()}
      <ImagePreviewModal shown={shownModal} onHidden={onHidden} />
    </>
  )
}
