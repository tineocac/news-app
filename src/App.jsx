import { HashRouter, Routes, Route } from 'react-router-dom'
import './assets/styles/App.css'
import LoadingScreen from './components/LoadingScreen'
import MyNavBar from './components/MyNavBar'
import { Favorites, Home, Login, NewDetails } from './pages'

function App() {

  return (
    <HashRouter>
      <MyNavBar />
      <LoadingScreen />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/login' element={<Login />} />
        <Route path='/news/:id' element={<NewDetails />} />
      </Routes>
    </HashRouter>
  )
}

export default App
