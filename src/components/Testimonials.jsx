import React from 'react'
import styles from '../style'
import { feedback } from '../constants'
import Feedback from './Feedback'
function Testimonials() {
  return (
    <section id="clients" className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
      <div className='w-[60%] h-[60%] -right-[50%] rounded-full z-0 absolute blue__gradient'/>
      <div className='flex md:flex-row flex-col sm:mb-16 mb-6 w-full justify-between items-center relative z-[1] '>
        <h1 className={`${styles.heading2}`}>
        What People are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} max-w-[450px]`}> Everything you need to accept card payments and grow your business
          anywhere on the planet.</p>
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center feedback-container w-full relativ z-[1]'>
        {feedback.map((card)=>(
          <Feedback key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )
}

export default Testimonials