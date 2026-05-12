function Home({ user }) {
  return (
    <div>
      <h1>Home</h1>
      <p>Bienvenido: {user || 'Invitado'}</p>
    </div>
  )
}

export default Home