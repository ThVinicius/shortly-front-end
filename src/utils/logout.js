export default function logout(setGlobal, navigate) {
  setGlobal(prevGlobal => ({ ...prevGlobal, token: null, customer: null }))

  localStorage.removeItem('token')

  navigate('/')
}
