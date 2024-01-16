

const ListItems = ({ isMenuOpen }) => {
  return (
    <ul className={isMenuOpen
                  ? 'h-[75%] flex flex-col justify-center text-[2.2rem] font-Josefin uppercase leading-[4rem]'
                  : 'max-[800px]:hidden flex gap-5 lg:gap-6 xl:gap-7 text-White lg:text-[1.1rem] xl:text-[1.15rem] transition-all duration-500'}>
                    <li className=" active:scale-90 transition-all duration-200"><a target="_blank" rel="noopener noreferrer" className='border-b-0 hover:border-White hover:border-b-2 cursor-pointer'>About</a></li>
                    <li className=" active:scale-90 transition-all duration-200"><a target="_blank" rel="noopener noreferrer" className='border-b-0 hover:border-White hover:border-b-2 cursor-pointer'>Careers</a></li>
                    <li className=" active:scale-90 transition-all duration-200"><a target="_blank" rel="noopener noreferrer" className='border-b-0 hover:border-White hover:border-b-2 cursor-pointer'>Events</a></li>
                    <li className=" active:scale-90 transition-all duration-200"><a target="_blank" rel="noopener noreferrer" className='border-b-0 hover:border-White hover:border-b-2 cursor-pointer'>Products</a></li>
                    <li className=" active:scale-90 transition-all duration-200"><a target="_blank" rel="noopener noreferrer" className='border-b-0 hover:border-White hover:border-b-2 cursor-pointer'>Support</a></li>
                </ul>
  )
}

export default ListItems