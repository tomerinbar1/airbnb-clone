import { SearchBar } from "./SearchBar"
import { Logo } from "./Logo"
import { Navbar } from "./Navbar"

export const AppHeader = () => {


  return (
    <header className="app-header flex">
      <Logo />
      <SearchBar />
      <Navbar />
    </header>
  )
}
