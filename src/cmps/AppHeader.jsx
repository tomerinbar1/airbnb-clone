import { SearchBar } from "./SearchBar"
import { Login } from "./Login"
import { Logo } from "./Logo"
import { Navbar } from "./Navbar"

export const AppHeader = () => {



  return (
    <header className="app-header flex">
      <Logo />
      <SearchBar />
      <Navbar />
      {/* <Login /> */}
    </header>
  )
}
