import React from 'react'
import { footerLinks, socialMedia, clients } from '../constants'
import { logo } from '../assets'
import styles from '../style'

function Footer() {
  return (
    <footer className= {`${styles.flexCenter} ${styles.paddingY} flex-col`} >
      <div className= {`${styles.flexStart} flex md:flex-row flex-col mb-8 w-full `} >
        <div className= 'flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain ' />
          <p className={`${styles.paragraph} max-w-[310px] mt-2`}>A new way to make the payments  <br className='sm:block hidden' />
            easy, relaiable and secure</p>
        </div>

        <div className='flex-[1.5] flex flex-row flex-wrap justify-between w-full md:mt-0 mt-10'>
          {footerLinks.map((footerLink)=>(
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-white text-[18px]'>{footerLink.title}</h4>
              {footerLink.links.map((link,index)=>(
                <ul className=' list-none'>
                  <li key={link.key} className='text-[16px] leading-[24px] text-dimWhite font-poppins font-normal hover:text-secondary cursor-pointer '>
                    {link.name}
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>        
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>

    </footer>
  )
}

export default Footer