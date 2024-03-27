import Menu from './container/left-sidebar/Menu/Menu'
import MiniMenu from './container/left-sidebar/MiniMenu/MiniMenu'
import Explorer from './container/main-view/Explorer/Explorer'
import ArtistData from './container/right-sidebar/ArtistData/ArtistData'
import Player from './container/now-playing-bar/Player/Player'
import './App.css'
import { useState } from 'react'

function App() {
  const [isMenu, setMenu] = useState(true)
  const [isMiniMenu, setMiniMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!isMenu)
    setMiniMenu(!isMiniMenu)
  }
  return (
    <div className='App'>
      <div className='left-sidebar'>
        {isMenu && <Menu changeState={handleMenu} state={isMenu} />}
        {isMiniMenu && <MiniMenu changeState={handleMenu} state={isMenu} />}
        </div>
      <div className='main-view'><Explorer/></div>
      {/* <div className='right-sidebar'><ArtistData/></div> */}
      <div className='now-playing-bar'><Player/></div>
    </div>
  )
}

export default App
