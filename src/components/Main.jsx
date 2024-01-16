import Interactive from './Interactive'
import Showcase from './Showcase'

const Main = ({ isMobile }) => {

  return (
    <main className='py-[7rem] px-6 md:px-[5rem] lg:px-[7rem] xl:px-[10rem]'>
      
      <Interactive isMobile={isMobile}></Interactive>

      <Showcase isMobile={isMobile}></Showcase>
    
    </main>
  )
}

export default Main