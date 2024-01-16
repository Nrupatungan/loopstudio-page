import Navbar from "./Navbar"

const Header = ({ isMenuOpen, setIsMenuOpen, handleHamburgerClick }) => {
  return (
    <header className='h-header-ht sm:bg-hero-img-desktop sm:bg-center bg-hero-img-mobile bg-no-repeat bg-cover'>
        <Navbar isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                handleHamburgerClick={handleHamburgerClick}
        ></Navbar>
        <div className={isMenuOpen
                        ? 'hidden'
                        : 'h-[85svh] flex justify-center md:justify-start items-center px-6 md:px-[5rem] lg:px-[7rem] xl:px-[10rem]'}>
            <h1 className='text-[2.8rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[1] font-Josefin text-White uppercase border-[0.15rem] border-white p-5 md:p-7 lg:p-9 max-w-[469px] md:max-w-[520px] lg:max-w-[650px]'>Immersive experiences that deliver</h1>
        </div>
    </header>
  )
}

export default Header