import { HashRouter, Routes, Route } from 'react-router-dom'
import './assets/styles/App.css'
import { Home } from './pages'

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
      <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
