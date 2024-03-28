import { useDispatch, useSelector } from 'react-redux'
import { setTabs } from '../../redux/tabs-slice'

export function Tabs({ all, favorite, popular }) {
  const dispatch = useDispatch()
  const activeTab = useSelector(state => state.tabs.value)

  function handleToggleTab(event) {
    const { id } = event.target.dataset
    dispatch(setTabs(id))
  }

  return (
    <div className="nav nav-tabs w-75 mb-4">
      <button data-id="tab1" className={`nav-link w-25 ${activeTab === 'tab1' ? 'active' : ''}`} onClick={handleToggleTab}>{all}</button>
      <button data-id="tab2" className={`nav-link w-25 ${activeTab === 'tab2' ? 'active' : ''}`} onClick={handleToggleTab}>{favorite}</button>
      <button data-id="tab3" className={`nav-link w-25 ${activeTab === 'tab3' ? 'active' : ''}`} onClick={handleToggleTab}>{popular}</button>
    </div>
  )
}
