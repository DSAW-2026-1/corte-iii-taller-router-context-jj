function About({ user }) {
  return (
    <div>
      <h1>About</h1>
      <p>Usuario actual: {user || 'Invitado'}</p>
    </div>
  )
}

export default About