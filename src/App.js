import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { HomePage } from './pages/HomePage'
import { StayDetails } from './pages/StayDetails'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import '../src/assets/styles/main.scss'
import { StayIndex } from './pages/StayIndex'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <section className="main-layout">
        <AppHeader />
        <main className="main-app">
          <Routes>
            <Route path="/" element={<StayIndex/>} />
            <Route path="/:stayId" element={<StayDetails />} />

          </Routes>
        </main>
        <AppFooter />
      </section>
    </Router>
    </Provider>
  )
}

export default App
