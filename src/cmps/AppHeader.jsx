import { SearchBar } from "./SearchBar"
import { Logo } from "./Logo"
import { Navbar } from "./Navbar"
import { useRef, useState } from 'react'
import { SearchBarExpanded } from "./SearchBarExpanded"
import { useLocation } from 'react-router-dom'


export const AppHeader = () => {
  const location = useLocation()
  const urlSearchParams = new URLSearchParams(location.search)
  console.log('params', urlSearchParams);
  
  const searchBarRef = useRef(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("location")


  function handleTabsUBMIT() {
    if (selectedTab === 'location') setSelectedTab('checkIn')
    if (selectedTab === 'checkIn') setSelectedTab('checkOut')
    if (selectedTab === 'checkOut') setSelectedTab('guests')
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
      {/* {!isSearchOpen && <SearchBar onExpandSearch={onExpandSearch} />} */}
      <SearchBar onExpandSearch={onExpandSearch} isSearchOpen={isSearchOpen} />
      <SearchBarExpanded
        setSelectedTab={setSelectedTab}
        isSearchOpen={isSearchOpen}
        selectedTab={selectedTab}
      />
      <Navbar />

    </header>
  )
}
