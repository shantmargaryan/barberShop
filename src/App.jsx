import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Header from './Components/Header'
import { Main } from './styled/mixStyle'
import Footer from './Components/Footer'

function App() {
  const Home = lazy(() => import('./Pages/Home'))
  const About = lazy(() => import('./Pages/About'))


  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Suspense>
      </Main>
      <Footer />
    </>
  )
}

export default App
