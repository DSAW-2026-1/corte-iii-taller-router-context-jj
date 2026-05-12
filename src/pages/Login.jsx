import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ setUser }) {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (name.trim() !== '') {
      setUser(name)
      navigate('/')
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleLogin}>Ingresar</button>
    </div>
  )
}

export default Login