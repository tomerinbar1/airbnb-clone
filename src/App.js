import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { StayDetails } from './pages/StayDetails'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { StayIndex } from './pages/StayIndex'
import { store } from './store/store'
import { StayEdit } from './pages/StayEdit'
import { UserMsg } from './cmps/user/user-msg'
import { Wishlist } from './cmps/user/WishList'
import { Trips } from './cmps/user/Trips'
import '../src/assets/styles/main.scss'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="main-layout">
          <AppHeader />
          <main className="main-app">
            <Routes>
              <Route path="/" element={<StayIndex />} />
              <Route path="/stay/edit/:stayId" element={<StayEdit />} />
              <Route path="/:stayId" element={<StayDetails />} />
              <Route path='/trip' element={<Trips />}/>
              <Route path='/wishlist' element={<Wishlist />} />
            </Routes>
          </main>
          <AppFooter />
          <UserMsg />
        </section>
      </Router>
    </Provider>
  )
}

export default App
