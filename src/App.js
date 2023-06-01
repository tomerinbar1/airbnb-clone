import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { HomePage } from './pages/HomePage'
import { StayDetails } from './pages/StayDetails'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import '../src/assets/styles/main.scss'

function App() {
  return (
    // <Provider>
    <Router>
      <section className="main-layout app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:stayId" element={<StayDetails />} />
          </Routes>
        </main>
        <AppFooter />
      </section>
    </Router>
    // </Provider>
  )
}

export default App
