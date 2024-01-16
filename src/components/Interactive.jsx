import InteractiveVRMobile from '../assets/images/mobile/image-interactive.jpg'
import InteractiveVRDesktop from '../assets/images/desktop/image-interactive.jpg'

const Interactive = ({isMobile}) => {
  return (
    <section className='mb-[6rem] min-[940px]:mb-[15rem] relative'>
        <img src={isMobile ? InteractiveVRMobile : InteractiveVRDesktop} alt="interactive vr image" className='w-[44rem] mb-[3rem]' />
        <article className='text-center sm:px-[2rem] md:px-[4rem] min-[940px]:absolute min-[940px]:right-[-0%] min-[940px]:bottom-[-25%] min-[940px]:bg-White min-[940px]:w-[560px] xl:w-[604px] min-[940px]:h-[400px] xl:h-[410px] min-[940px]:pt-[3rem] min-[940px]:ps-[4rem] min-[940px]:text-start'>
            <h1 className='uppercase font-Josefin text-[2.5rem] max-w-[575px] min-[940px]:w-full max-[940px]:mx-auto text-Black mb-[1rem]'>The leader in interactive vr</h1>
            <p className=' text-Dark_Gray text-[1.1rem] leading-[2rem]'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the world. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </article>
    </section>
  )
}

export default Interactive