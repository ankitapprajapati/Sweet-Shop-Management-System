
import { Routes, Route } from 'react-router-dom'
import AdminPanel from './pages/AdminPanel'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Landing from './pages/Landing'
import ProtectedRoute from './routes/ProtectedRoute'
import AdminRoute from './routes/AdminRoute'
import Navbar from './components/UI/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
          {/* Landing Page */}
          <Route path='/' element={<Landing/>}/>

          {/* Auth */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>


          {/* user Dashboard */}
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          } />

          {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          }
        />

        </Routes>
    </>
  )
}

export default App
