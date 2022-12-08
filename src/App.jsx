import { useSelector } from 'react-redux'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import MyNavBar from './components/MyNavBar'
import { Purchases, Home, Login, ProductsDetails } from './pages'

function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
      <MyNavBar />
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchases' element={<Purchases />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<ProductsDetails />} />
      </Routes>
    </HashRouter>
  )
}

export default App
