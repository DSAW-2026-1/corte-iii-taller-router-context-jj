import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'
import NotFound from './pages/NotFound'
import Login from './pages/Login'

function App() {
  const [user, setUser] = useState('')

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/contact">Contact</Link> |{' '}
        <Link to="/user">User</Link> |{' '}
        <Link to="/login">Login</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home user={user} />} />

        <Route
          path="/about"
          element={<About user={user} />}
        />

        <Route
          path="/contact"
          element={<Contact user={user} />}
        />

        <Route
          path="/user"
          element={<User user={user} />}
        />

        <Route
          path="/login"
          element={<Login setUser={setUser} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App