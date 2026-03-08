import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar, Footer } from './components/layout'
import { 
  LandingPage, 
  PlansPage, 
  QFitKavachPage, 
  QFitSuperPage,
  QFitLitePage,
  QFitEssentialPage,
  QFitMaxPage
} from './pages'
import PlanCheckoutPage from './pages/PlanCheckoutPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/plans/qfit-kavach" element={<QFitKavachPage />} />
            <Route path="/plans/qfit-super" element={<QFitSuperPage />} />
            <Route path="/plans/qfit-lite" element={<QFitLitePage />} />
            <Route path="/plans/qfit-essential" element={<QFitEssentialPage />} />
            <Route path="/plans/qfit-max" element={<QFitMaxPage />} />
            <Route path="/checkout/:planId" element={<PlanCheckoutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
