import React from 'react'
import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className="container">
            <div className='flex gap-[50px] lg:gap-[130px] xl:gap-0  flex-col justify-between lg:flex-row'>

                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={aboutImg} alt="" />
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px]'>
                      <img src={aboutCardImg} alt="" />
                    </div>

                </div>

                {/* =================about content========================== */}

                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order'>
                  <h2 className='heading'>Proud to be one of the nations best</h2>
                  <p className='text_para'> For 20 years in a row, News & World Report has recognized us 
                  as one of the best public hospitals in the Nation.
                  </p>
                  <p className="text_para">
                    Our best is something we strive for each day, caring for our
                    patients not looking back at what we accomplished but towards what we can do tomorrow. 
                  </p>

                  <Link  to="/" ><button className='btn rounded-lg'>Learn More</button></Link>
                </div>


            </div>
        </div>
    </section>
  )
}

export default About