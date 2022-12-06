import { HashRouter, Routes, Route } from 'react-router-dom'
import './assets/styles/App.css'
import { Favorites, Home, Login, NewDetails } from './pages'

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/login' element={<Login />} />
          <Route path='/news/:id' element={<NewDetails />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
