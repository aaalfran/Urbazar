const authInitState = {
  auth: false,
  auth_err: false
}

function AuthR (state = authInitState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, auth: true }
    case 'SIGNUP_ERR':
      return { ...state, auth_err: 'Registro fallido' }
    case 'LOGIN_ERR':
      return { ...state, auth_err: 'Ingreso fallido' }
    case 'LOGOUT':
      return { ...state, auth: false }
    default:
      return state
  }
}

export default AuthR
