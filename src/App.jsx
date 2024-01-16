import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const handleHamburgerClick = () => {
      setIsMenuOpen(!isMenuOpen)
  }

  window.addEventListener('resize', () => window.innerWidth <= 600 ? setIsMobile(true) : setIsMobile(false))

  return (
    <>
      <Header isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              handleHamburgerClick={handleHamburgerClick}        
      ></Header>
      <Main isMenuOpen={isMenuOpen}
            isMobile={isMobile}
      ></Main>
      <Footer></Footer>
    </>
  )
}

export default App
