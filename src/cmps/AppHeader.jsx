import { SearchBar } from "./SearchBar"
import { Logo } from "./Logo"
import { Navbar } from "./Navbar"
import { useRef, useState } from 'react'
import { SearchBarExpanded } from "./SearchBarExpanded"
import { useSearchParams } from 'react-router-dom'


export const AppHeader = () => {
  const [searchParams] = useSearchParams()
  const searchBarRef = useRef(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("location")



  const staySearchParams = {
    location: searchParams.get('location') || '',
    checkIn: searchParams.get('checkIn') ? new Date(+searchParams.get('checkIn')) : '',
    checkOut: searchParams.get('checkOut') ? new Date(+searchParams.get('checkOut')) : '',
    guests: {
      adults: +searchParams.get('adults') || 0,
      children: +searchParams.get('children') || 0,
      infants: +searchParams.get('infants') || 0,
      pets: +searchParams.get('pets') || 0,
    }
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
      staySearchParams={staySearchParams}
       />
      <Navbar />

    </header>
  )
}
