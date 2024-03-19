import Menu from './container/left-sidebar/Menu/Menu'
import MiniMenu from './container/left-sidebar/MiniMenu/MiniMenu'
import Explorer from './container/main-view/Explorer/Explorer'
import ArtistData from './container/right-sidebar/ArtistData/ArtistData'
import Player from './container/now-playing-bar/Player/Player'
import './App.css'

function App() {

  return (
    <div className='App'>
      <div className='left-sidebar'>
        {/* <Menu/> */}
        <MiniMenu/>
        </div>
      <div className='main-view'><Explorer/></div>
      {/* <div className='right-sidebar'><ArtistData/></div> */}
      <div className='now-playing-bar'><Player/></div>
    </div>
  )
}

export default App
