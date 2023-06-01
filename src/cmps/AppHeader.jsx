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
      {/* <div className="user-options">       for future i18? and more, dont forget to set style props to parent div
        <Login />
      </div> */}
    </header>
  )
}
