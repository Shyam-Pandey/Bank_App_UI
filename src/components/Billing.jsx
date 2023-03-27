import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
function Billing() {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt='bill' className='w-[100%] h-[100%] z-[5] relative'/>
        <div className='w-[50%] h-[50%] z-[3] rounded-full -left-1/2 top-0 white__gradient absolute'/>
      <div className='w-[50%] h-[50%] z-[0] rounded-full -left-1/2 bottom-0 pink__gradient absolute'/>
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading2}`}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
        </p>

        <div className=' flex flex-row flex-wrap gap-10 md:mt-10 mt-6'>
          <img src={apple} alt=" app_store" className='w-[128px] object-contain' />
          <img src={google} alt=" google_playstore" className='w-[128px] object-contain' />
        </div>
      </div>
      
    </section>
  )
}

export default Billing