import { SearchBar } from "./SearchBar"
import { Logo } from "./Logo"
import { Navbar } from "./Navbar"
import { useRef, useState } from 'react'
import { SearchBarExpanded } from "./SearchBarExpanded"

export const AppHeader = () => {
  const searchBarRef = useRef(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("location")



  function stateChangeHandle(fieldToChange) {
    setSelectedTab(fieldToChange)
    console.log(selectedTab)
  }

  function onExpandSearch() {
    setIsSearchOpen(prevState => !prevState)
    toggleOpenClass()
  }

  function toggleOpenClass() {
    searchBarRef.current.classList.toggle('search-bar-open')
  }

  return (
    <header ref={searchBarRef} className="app-header">

      {isSearchOpen &&
        <div onClick={() => onExpandSearch()} className="main-screen-full">
        </div>}

      <Logo />

      {!isSearchOpen && <SearchBar onExpandSearch={onExpandSearch} />}
      <SearchBarExpanded setSelectedTab={setSelectedTab} isSearchOpen={isSearchOpen} selectedTab={selectedTab} />
      <Navbar />

    </header>
  )
}
