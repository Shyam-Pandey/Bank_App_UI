import React from 'react'
import { features } from '../constants'
import styles , {layout} from '../style'
import Button from './Button'

const FeatureCard =({icon,title,content,index})=>(
  <div className={`flex flex-row feature-card p-6 rounded-[20px] ${index!==features.length-1?'mb-6':'mb:0'}`}>
    <div className={`w-[64px] h-[64px]  bg-dimBlue rounded-full ${styles.flexCenter}`}>
      <img src={icon} alt="icon"className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className='flex-1 flex flex-col ml-2'>
      <h2 className='text-white text-[18px] font-semibold font-poppins leading-[23px]'>{title}</h2>
      <p className='text-dimWhite text-[15px] font-normal font-poppins leading-[18px]'>{content}</p>
    </div>
  </div>
)

function Business() {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business <br className='sm:block hidden' /> 
          we'll handle the money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>
        <span className='mt-10'>
        <Button/>
        </span>
      </div>

      <div className={`flex flex-col ${layout.sectionImg}`}>
        {features.map((feature,index)=>(
          <FeatureCard key={feature.id} {...feature}/>
        ))}
        
      </div>
    </section>
  )
}

export default Business