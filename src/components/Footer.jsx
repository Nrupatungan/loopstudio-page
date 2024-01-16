import loopstudio_logo from '../assets/images/logo.svg'
import facebook_logo from '../assets/images/icon-facebook.svg'
import instagram_logo from '../assets/images/icon-instagram.svg'
import pinterest_logo from '../assets/images/icon-pinterest.svg'
import twitter_logo from '../assets/images/icon-twitter.svg'


const Footer = () => {
  return (
    <footer className='bg-black py-[4rem] min-[600px]:py-[3rem]  px-6 md:px-[5rem] lg:px-[7rem] xl:px-[10rem] lg:flex lg:justify-between lg:items-start'>
        <div className='text-center mb-[4rem] lg:mb-0'>
            <img src={loopstudio_logo} alt="loopstudios logo" className='max-[1024px]:mx-auto mb-[3rem] min-[600px]:mb-[2rem]'/>
            <ul className='text-White text-[1.1rem] flex max-[599px]:flex-col min-[600px]:justify-center gap-5'>
                <li className=" active:scale-90 transition-all duration-200"><a target="_blank" rel="noopener noreferrer" className='border-b-0 hover:border-White hover:border-b-2 lg:pb-1.5 cursor-pointer'>About</a></li>
                <li className=" active:scale-90 transition-all duration-200"><a target="_blank" rel="noopener noreferrer" className='border-b-0 hover:border-White hover:border-b-2 lg:pb-1.5 cursor-pointer'>Careers</a></li>
                <li className=" active:scale-90 transition-all duration-200"><a target="_blank" rel="noopener noreferrer" className='border-b-0 hover:border-White hover:border-b-2 lg:pb-1.5 cursor-pointer'>Events</a></li>
                <li className=" active:scale-90 transition-all duration-200"><a target="_blank" rel="noopener noreferrer" className='border-b-0 hover:border-White hover:border-b-2 lg:pb-1.5 cursor-pointer'>Products</a></li>
                <li className=" active:scale-90 transition-all duration-200"><a target="_blank" rel="noopener noreferrer" className='border-b-0 hover:border-White hover:border-b-2 lg:pb-1.5 cursor-pointer'>Support</a></li>
            </ul>
        </div>
        <div className='text-center'>
            <div className='w-full flex justify-center lg:justify-end gap-5 mb-[3rem] lg:mb-[1.9rem]'>
                <img src={facebook_logo} alt="facebook logo" className='cursor-pointer  active:scale-75 transition-all border-b-0 hover:border-White hover:border-b-2 lg:pb-3 pb-3' />
                <img src={twitter_logo} alt="twitter logo" className='cursor-pointer active:scale-75 transition-all border-b-0 hover:border-White hover:border-b-2 lg:pb-3 pb-3' />
                <img src={pinterest_logo} alt="pinterest logo" className='cursor-pointer active:scale-75 transition-all border-b-0 hover:border-White hover:border-b-2 lg:pb-3 pb-3' />
                <img src={instagram_logo} alt="instagram logo" className='cursor-pointer active:scale-75 transition-all border-b-0 hover:border-White hover:border-b-2 lg:pb-3 pb-3' />
            </div>
            <p className=' text-Dark_Gray'>&copy; 2021 Loopstudios. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer