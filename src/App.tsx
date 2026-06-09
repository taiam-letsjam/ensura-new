import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import EnsuraGigPage from './pages/EnsuraGigPage'
import EnsuraGroupPage from './pages/EnsuraGroupPage'
import EnsuraGuardPage from './pages/EnsuraGuardPage'

/** Scroll to top on route (pathname) change; preserve in-page hash anchors. */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ensura-gig" element={<EnsuraGigPage />} />
          <Route path="/group" element={<EnsuraGroupPage />} />
          <Route path="/guard" element={<EnsuraGuardPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
