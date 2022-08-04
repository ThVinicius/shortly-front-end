import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalProvider } from './context/globalContext'
import ResetCSS from './assets/css/reset'
import GlobalCSS from './assets/css/global'
import PageContainer from './containers/page/PageContainer'
import Header from './components/header/Header'
import Login from './pages/login/main/Login'
import Register from './pages/register/main/Register'
import Home from './pages/home/main/Home'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <ResetCSS />
        <GlobalCSS />
        <PageContainer>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </PageContainer>
      </GlobalProvider>
    </BrowserRouter>
  )
}
