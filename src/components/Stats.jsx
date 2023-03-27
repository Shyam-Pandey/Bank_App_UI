import React from 'react'
import { stats } from '../constants'
import styles from '../style'
function Stats() {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((data) => (
          <div key={data.id} className='flex flex-1 justify-start m-3 items-center'>
            <h4 className='font-poppins text-white xs:text-[40px] text-[30px] font-semibold xs:leading-[53px] leading-[43px]'>{data.value}</h4>{" "}
            <p className='font-poppins text-gradient xs:text-[20px] text-[15px] font-semibold xs:leading-[26px] leading-[21px] uppercase ml-3'>{data.title}</p>
          </div>
        ))}
    </section>
  )
}

export default Stats