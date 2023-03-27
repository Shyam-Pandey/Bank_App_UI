import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'
function CardDeal() {
  return (
    <section id='product' className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h1 className={`${styles.heading2}`}>
      Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
      aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <span className='mt-10'><Button /></span>
    </div>
    <div className={`${layout.sectionImg}`}>
      <img src={card} alt='bill' className='w-[100%] h-[100%] z-[5] relative'/>
      <div className='w-[50%] h-[50%] z-[3] rounded-full -right-1/2 top-0 white__gradient absolute'/>
    <div className='w-[50%] h-[50%] z-[0] rounded-full -right-1/2 bottom-0 pink__gradient absolute'/>
    </div>
    
  </section>
  )
}

export default CardDeal