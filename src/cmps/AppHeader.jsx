import { SearchBar } from "./SearchBar"
import { Logo } from "./Logo"
import { Navbar } from "./Navbar"
import { useRef, useState } from 'react'
import { SearchBarExpanded } from "./SearchBarExpanded"


export const AppHeader = () => {
  const seachBarRef = useRef(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  function onExpandSearch() {
    setIsSearchOpen(prevState => !prevState)
    toggleOpenClass()
    console.log(isSearchOpen)
  }

  function toggleOpenClass() {
    seachBarRef.current.classList.toggle('search-bar-open')
  }

  return (
    <header ref={seachBarRef} className="app-header">

      {isSearchOpen &&
        <div onClick={() => onExpandSearch()} className="main-screen-full"></div>}
      <Logo />
      {!isSearchOpen && <SearchBar onExpandSearch={onExpandSearch} />}
      {isSearchOpen && <SearchBarExpanded />}
      <Navbar />
    </header>
  )
}
