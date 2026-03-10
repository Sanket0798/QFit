import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
import { Navbar, Footer } from './components/layout'
import ErrorBoundary from './components/common/ErrorBoundary'
import LoadingSpinner from './components/common/LoadingSpinner'

// Lazy load pages for better performance
const LandingPage = lazy(() => import('./pages/LandingPage'))
const PlansPage = lazy(() => import('./pages/PlansPage'))
const PlanDetailPage = lazy(() => import('./pages/PlanDetailPage'))
const PlanCheckoutPage = lazy(() => import('./pages/PlanCheckoutPage'))

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner size="xl" />
  </div>
)

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/plans" element={<PlansPage />} />
                {/* Consolidated plan detail routes */}
                <Route path="/plans/:planId" element={<PlanDetailPage />} />
                <Route path="/checkout/:planId" element={<PlanCheckoutPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
