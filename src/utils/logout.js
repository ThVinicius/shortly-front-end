export default function logout(global, setGlobal, navigate) {
  setGlobal({ ...global, token: null, customer: null })

  localStorage.removeItem('token')

  navigate('/')
}
