import React from 'react'

const DatosPerfil = ({ user }) => {
  return (
        <div>
            <p><strong>Correo:</strong> {user.correo}</p>
            <p><strong>Usuario:</strong> {user.username}</p>
            <p><strong>Nombre:</strong> {user.nombre}</p>
            <p><strong>Teléfono:</strong> {user.telefono}</p>
            <p><strong>Edad:</strong> {user.edad}</p>
        </div>
  )
}

export default DatosPerfil
