import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import { GetStarted } from '../components'

function Hero() {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row  items-center bg-discount-gradient rounded-[10px] py-[10px] px-4'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%
            </span> DISCOUNT FOR {" "}
            <span className='text-white'>FOR 1 MONTH
            </span> ACOOUNT
          </p>
        </div>
        <div className='flex flex-row w-full justify-between items-center'>
          <h1 className='text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>
            The Next <br className='sm:block hidden' /> {" "}
            <span className="text-gradient">Generation</
            span>
          </h1>
          <div className='ss:flex hidden mr-4 ml-0'>
            <GetStarted />
          </div>
        </div>
        <h1 className='text-white font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full'>
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className='w-[100%] h-[100%] z-[5] relative'>
        <img src={robot} alt="robot" />
        <div className='absolute top-[0] z-0 w-[40%] h-[35%] pink__gradient'/>
        <div className='absolute w-[80%] z-[1] h-[80%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute w-[50%] z-0 h-[50%] rounded-full right-20 bottom-20 blue__gradient pink__gradient'/>
      </div>
      <div className='flex ss:hidden mr-2 ml-24'>
            <GetStarted />
          </div>
    </section>
  )
}

export default Hero