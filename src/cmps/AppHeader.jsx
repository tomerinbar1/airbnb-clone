import { SearchBar } from "./SearchBar"
import { Logo } from "./Logo"
import { Navbar } from "./Navbar"
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { SearchBarExpanded } from "./SearchBarExpanded"
import { useSelector } from "react-redux"


export const AppHeader = () => {
  const searchBarRef = useRef(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("location")
  const stayId = useSelector(storeState => storeState.stayModule.stayId)

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
    <header ref={searchBarRef}  className={`app-header ${stayId ? 'header-block' : ''}`}>

      {isSearchOpen &&
        <div onClick={() => onExpandSearch()} className="main-screen-full">
        </div>}
      <Logo />
      {/* {!isSearchOpen && <SearchBar onExpandSearch={onExpandSearch} />} */}
      <SearchBar isStayId={stayId} onExpandSearch={onExpandSearch} isSearchOpen={isSearchOpen} />
      <SearchBarExpanded
        setSelectedTab={setSelectedTab}
        isSearchOpen={isSearchOpen}
        selectedTab={selectedTab}
      />
      <Navbar />

    </header>
  )
}
