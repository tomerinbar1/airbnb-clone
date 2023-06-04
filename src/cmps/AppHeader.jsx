import { SearchBar } from "./SearchBar"
import { Logo } from "./Logo"
import { Navbar } from "./Navbar"
import { useRef, useState } from 'react'
import { SearchBarExpanded } from "./SearchBarExpanded"
import { utilService } from "../services/util.service"

export const AppHeader = () => {
  const seachBarRef = useRef(null)
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
    seachBarRef.current.classList.toggle('search-bar-open')
  }

  return (
    <header ref={seachBarRef} className="app-header">

      {isSearchOpen &&
        <div onClick={() => onExpandSearch()} className="main-screen-full">
        </div>}

      <Logo />

      {!isSearchOpen && <SearchBar onExpandSearch={onExpandSearch} />}
      {/* {isSearchOpen && <SearchBarExpanded stateChangeHandle={stateChangeHandle} />} */}
      <SearchBarExpanded setSelectedTab={setSelectedTab} isSearchOpen={isSearchOpen} />
      <Navbar />

      {/* <section className="filter-cmps"> */}
      {/* <DateFilter filterBy={filterBy} setFilterDates={setFilterDates} /> */}
      {/* </section> */}

    </header>
  )
}
