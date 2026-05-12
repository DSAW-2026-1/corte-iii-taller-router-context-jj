function Contact({ user }) {
  return (
    <div>
      <h1>Contact</h1>
      <p>Usuario actual: {user || 'Invitado'}</p>
    </div>
  )
}

export default Contact