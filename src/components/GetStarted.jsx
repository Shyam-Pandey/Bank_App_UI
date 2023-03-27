import React from 'react'
import styles from '../style'
import {arrowUp} from '../assets'

function GetStarted() {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} bg-primary flex-col w-[100%] h-[100%] rounded-full`}>
        <div className='text-white flex flex-row justify-between gap-2'>
          <p className='text-gradient font-poppins font-semibold'>Get</p>
          <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain' />
        </div>
        <p className='text-gradient font-poppins font-semibold'>Started</p>
      </div>
    </div>
  )
}

export default GetStarted