
import { Routes, Route } from 'react-router-dom'
import AdminPanel from './pages/AdminPanel'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Landing from './pages/Landing'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
    </>
  )
}

export default App
