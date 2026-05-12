function User({ user }) {
  return (
    <div>
      <h1>User</h1>
      <p>Usuario logueado: {user || 'Invitado'}</p>
    </div>
  )
}

export default User