import { HashRouter, Routes, Route } from 'react-router-dom'
import './assets/styles/App.css'
import MyNavBar from './components/MyNavBar'
import { Favorites, Home, Login, NewDetails } from './pages'

function App() {

  return (
    <HashRouter>
      <MyNavBar />
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
