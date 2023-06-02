import { SearchBar } from "./SearchBar"
import { Login } from "./Login"

export const AppHeader = () => {



  function onLogoClick() {

  }

  return (
    <header className="app-header flex">
        <h1 onClick={onLogoClick}>Air-BNB</h1>
        <SearchBar />
        <Login />
    </header>
  )
}
