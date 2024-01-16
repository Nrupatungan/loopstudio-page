import DeepEarthMobile from '../assets/images/mobile/image-deep-earth.jpg'
import DeepEarthDesktop from '../assets/images/desktop/image-deep-earth.jpg'
import NightArcadeMobile from '../assets/images/mobile/image-night-arcade.jpg'
import NightArcadeDesktop from '../assets/images/desktop/image-night-arcade.jpg'
import SoccerTeamMobile from '../assets/images/mobile/image-soccer-team.jpg'
import SoccerTeamDesktop from '../assets/images/desktop/image-soccer-team.jpg'
import GridMobile from '../assets/images/mobile/image-grid.jpg'
import GridDesktop from '../assets/images/desktop/image-grid.jpg'
import AboveMobile from '../assets/images/mobile/image-from-above.jpg'
import AboveDesktop from '../assets/images/desktop/image-from-above.jpg'
import BorealisMobile from '../assets/images/mobile/image-pocket-borealis.jpg'
import BorealisDesktop from '../assets/images/desktop/image-pocket-borealis.jpg'
import CuriosityMobile from '../assets/images/mobile/image-curiosity.jpg'
import CuriosityDesktop from '../assets/images/desktop/image-curiosity.jpg'
import FisheyeMobile from '../assets/images/mobile/image-fisheye.jpg'
import FisheyeDesktop from '../assets/images/desktop/image-fisheye.jpg'

const Showcase = ({isMobile}) => {
  return (
    <section className='text-center md:text-start relative'>
        <h1 className='uppercase text-[2.5rem] font-Josefin mb-[3rem]'>Our Creations</h1>
        <div className="flex flex-wrap min-[600px]:gap-8 justify-center mb-4">
          <article className='relative mb-[2rem] text-White hover:text-Black after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full z-[1] after:bg-[rgba(0,0,0,0.2)] after:shadow-incest hover:after:bg-[rgba(255,255,255,0.5)] hover:after:shadow-wicest cursor-pointer hover:shadow-[-6px_15px_27px_-7px_rgba(0,0,0,0.53)] active:scale-[0.85] transition-all duration-500'>
            <img src={isMobile ? DeepEarthMobile : DeepEarthDesktop} alt="earth from space" />
            <p className='font-Josefin uppercase text-left max-[374px]:text-[1.5rem] min-[375px]:text-[2rem] min-[450px]:text-[2.25rem] z-10 absolute bottom-0 left-[2%] min-[375px]:bottom-0 min-[375px]:left-[0.2rem] min-[450px]:bottom-[4%] min-[450px]:left-[8%] min-[600px]:bottom-[3%] min-[600px]:left-[6%]'>Deep<br />Earth</p>
          </article>
          <article className='relative mb-[2rem] text-White hover:text-Black after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full z-[1] after:bg-[rgba(0,0,0,0.2)] after:shadow-incest hover:after:bg-[rgba(255,255,255,0.5)] hover:after:shadow-wicest cursor-pointer hover:shadow-[6px_15px_27px_-7px_rgba(0,0,0,0.53)] active:scale-[0.85] transition-all duration-500'>
            <img src={isMobile ? NightArcadeMobile : NightArcadeDesktop} alt="earth from space" />
            <p className='font-Josefin uppercase text-left max-[374px]:text-[1.5rem] min-[375px]:text-[2rem] min-[450px]:text-[2.25rem] z-10 absolute bottom-0 left-[2%] min-[375px]:bottom-0 min-[375px]:left-[0.2rem] min-[450px]:bottom-[4%] min-[450px]:left-[8%] min-[600px]:bottom-[3%] min-[600px]:left-[6%]'>night<br />Arcade</p>
          </article>
          <article className='relative mb-[2rem] text-White hover:text-Black after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full z-[1] after:bg-[rgba(0,0,0,0.2)] after:shadow-incest hover:after:bg-[rgba(255,255,255,0.5)] hover:after:shadow-wicest cursor-pointer hover:shadow-[-6px_15px_27px_-7px_rgba(0,0,0,0.53)] active:scale-[0.85] transition-all duration-500'>
            <img src={isMobile ? SoccerTeamMobile : SoccerTeamDesktop} alt="earth from space" />
            <p className='font-Josefin uppercase text-left max-[374px]:text-[1.5rem] min-[375px]:text-[2rem] min-[450px]:text-[2.25rem] z-10 absolute bottom-0 left-[2%] min-[375px]:bottom-0 min-[375px]:left-[0.2rem] min-[450px]:bottom-[4%] min-[450px]:left-[8%] min-[600px]:bottom-[3%] min-[600px]:left-[6%]'>soccer<br />team vr</p>
          </article>
          <article className='relative mb-[2rem] text-White hover:text-Black after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full z-[1] after:bg-[rgba(0,0,0,0.2)] after:shadow-incest hover:after:bg-[rgba(255,255,255,0.5)] hover:after:shadow-wicest cursor-pointer hover:shadow-[6px_15px_27px_-7px_rgba(0,0,0,0.53)] active:scale-[0.85] transition-all duration-500'>
            <img src={isMobile ? GridMobile : GridDesktop} alt="earth from space" className='shadow-incest' />
            <p className='font-Josefin uppercase text-left max-[374px]:text-[1.5rem] min-[375px]:text-[2rem] min-[450px]:text-[2.25rem] z-10 absolute bottom-0 left-[2%] min-[375px]:bottom-0 min-[375px]:left-[0.2rem] min-[450px]:bottom-[4%] min-[450px]:left-[8%] min-[600px]:bottom-[3%] min-[600px]:left-[6%]'>The<br />grid</p>
          </article>
          <article className='relative mb-[2rem] text-White hover:text-Black after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full z-[1] after:bg-[rgba(0,0,0,0.2)] after:shadow-incest hover:after:bg-[rgba(255,255,255,0.5)] hover:after:shadow-wicest cursor-pointer hover:shadow-[-6px_15px_27px_-7px_rgba(0,0,0,0.53)] active:scale-[0.85] transition-all duration-500'>
            <img src={isMobile ? AboveMobile : AboveDesktop} alt="earth from space" />
            <p className='font-Josefin uppercase text-left max-[374px]:text-[1.5rem] min-[375px]:text-[2rem] min-[450px]:text-[2.25rem] z-10 absolute bottom-0 left-[2%] min-[375px]:bottom-0 min-[375px]:left-[0.2rem] min-[450px]:bottom-[4%] min-[450px]:left-[8%] min-[600px]:bottom-[3%] min-[600px]:left-[6%]'>From up<br />above vr</p>
          </article>
          <article className='relative mb-[2rem] text-White hover:text-Black after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full z-[1] after:bg-[rgba(0,0,0,0.2)] after:shadow-incest hover:after:bg-[rgba(255,255,255,0.5)] hover:after:shadow-wicest cursor-pointer hover:shadow-[6px_15px_27px_-7px_rgba(0,0,0,0.53)] active:scale-[0.85] transition-all duration-500'>
            <img src={isMobile ? BorealisMobile : BorealisDesktop} alt="earth from space" />
            <p className='font-Josefin uppercase text-left max-[374px]:text-[1.5rem] min-[375px]:text-[2rem] min-[450px]:text-[2.25rem] z-10 absolute bottom-0 left-[2%] min-[375px]:bottom-0 min-[375px]:left-[0.2rem] min-[450px]:bottom-[4%] min-[450px]:left-[8%] min-[600px]:bottom-[3%] min-[600px]:left-[6%]'>Pocket<br />Borealis</p>
          </article>
          <article className='relative mb-[2rem] text-White hover:text-Black after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full z-[1] after:bg-[rgba(0,0,0,0.2)] after:shadow-incest hover:after:bg-[rgba(255,255,255,0.5)] hover:after:shadow-wicest cursor-pointer hover:shadow-[-6px_15px_27px_-7px_rgba(0,0,0,0.53)] active:scale-[0.85] transition-all duration-500'>
            <img src={isMobile ? CuriosityMobile : CuriosityDesktop} alt="earth from space" />
            <p className='font-Josefin uppercase text-left max-[374px]:text-[1.5rem] min-[375px]:text-[2rem] min-[450px]:text-[2.25rem] z-10 absolute bottom-0 left-[2%] min-[375px]:bottom-0 min-[375px]:left-[0.2rem] min-[450px]:bottom-[4%] min-[450px]:left-[8%] min-[600px]:bottom-[3%] min-[600px]:left-[6%]'>The<br />Curiosity</p>
          </article>
          <article className='relative mb-[2rem] text-White hover:text-Black after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full z-[1] after:bg-[rgba(0,0,0,0.2)] after:shadow-incest hover:after:bg-[rgba(255,255,255,0.5)] hover:after:shadow-wicest hover:shadow-[6px_15px_27px_-7px_rgba(0,0,0,0.53)] active:scale-[0.85] transition-all duration-500 cursor-pointer'>
            <img src={isMobile ? FisheyeMobile : FisheyeDesktop} alt="earth from space" className='shadow-incest' />
            <p className='font-Josefin uppercase text-left max-[374px]:text-[1.5rem] min-[375px]:text-[2rem] min-[450px]:text-[2.25rem] z-10 absolute bottom-0 left-[2%] min-[375px]:bottom-0 min-[375px]:left-[0.2rem] min-[450px]:bottom-[4%] min-[450px]:left-[8%] min-[600px]:bottom-[3%] min-[600px]:left-[6%]'>make it<br />fisheye</p>
          </article>
        </div>
        <button className='uppercase px-[2.5rem] py-[0.5rem] border-2 border-black hover:bg-black hover:text-White tracking-[0.3em] active:scale-90 transition-all duration-200 md:absolute md:top-[7px] md:right-0'>see all</button>
      </section>
  )
}

export default Showcase