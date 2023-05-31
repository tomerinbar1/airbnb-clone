import './assets/style/main.scss'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { HomePage } from './pages/HomePage'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'

function App() {
  return (
    // <Provider>
    <Router>
      <section className="main-layout app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <AppFooter />
      </section>
    </Router>
    // </Provider>
  )
}

export default App
