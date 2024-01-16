import Hamburger from '../assets/images/icon-hamburger.svg'
import loopstudio_logo from '../assets/images/logo.svg'
import ListItems from './ListItems'
import Close from '../assets/images/icon-close.svg'

const Navbar = ({ isMenuOpen, handleHamburgerClick }) => {
    

  return (
    <nav className={isMenuOpen 
                  ? 'bg-Black h-full text-White px-6 md:px-[5rem]'
                  : 'h-[15svh] flex items-center px-6 md:px-[5rem] lg:px-[7rem] xl:px-[10rem]'}>
            {
              isMenuOpen
              ? <div className='h-full'>
                  <div className='h-[15%] flex justify-between items-center'>
                    <img src={loopstudio_logo} alt="loopstudios logo" className='h-6 md:h-7 lg:h-full'/>
                    <img src={isMenuOpen ? Close : Hamburger} alt="hamburger menu" className='h-4 min-[800px]:hidden cursor-pointer active:scale-75 transition-all duration-300' onClick={handleHamburgerClick}/>
                  </div>
                  <ListItems isMenuOpen={isMenuOpen}></ListItems>
                </div>
                
              : <div className="w-full flex justify-between items-center">
                  <img src={loopstudio_logo} alt="loopstudios logo" className='h-6 md:h-7 lg:h-full'/>
                  <img src={isMenuOpen ? Close : Hamburger} alt="hamburger menu" className='h-5 min-[800px]:hidden cursor-pointer active:scale-75 transition-all duration-300' onClick={handleHamburgerClick}/>
                  <ListItems isMenuOpen={isMenuOpen}></ListItems>
                </div>
            }

    </nav>
  )
}

export default Navbar