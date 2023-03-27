import React from 'react'
import { feedback } from '../constants'
import { quotes } from '../assets'
import styles from '../style'

function Feedback({content, name,title,img}) {
  return (
    <div className='flex flex-col flex-wrap rounded-[20px] px-10 py-12 max-w-[370px] md:mr-10 sm:mr-6 mr-0 my-5 feedback-card '>
      <img src={quotes} alt="double-quotes" className='w-[42px] h-[27px] '/>
      <p className= {`${styles.paragraph} text-white text-[18px] leading-[32px] font-poppins font-normal my-10`} >{content}</p>
      <div className='flex flex-row py-5'>
        <img src={img} alt="" className='w-[48px] h-[48px] rounded-full' />
        <span className='flex flex-col ml-4 '>
          <h4 className='text-white text-[20px] text-semibold  leading-[32px] font-poppins font-normal'> {name} </h4>
          <p className= 'text-dimWhite text-[16px]  leading-[24px] font-poppins font-normal' > {title} </p>
        </span>
      </div>
    </div>
  )
}

export default Feedback