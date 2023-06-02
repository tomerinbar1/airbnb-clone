import { SearchBar } from "./SearchBar"
import { Login } from "./Login"
import { Logo } from "./Logo"

export const AppHeader = () => {



  return (
    <header className="app-header flex">
      <Logo />
      <SearchBar />
      <Login />
    </header>
  )
}
