import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function LifeEvent() {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start center', 'end center']
        }
    )
  return (
    <div>
        <div className='primary-color my-4' >
                <motion.div className='flex relative w-10/12 items-start gap-20 mx-auto'>
                    <motion.div className='vb-bar vb origin-top' ref={ref} style={{scaleY: scrollYProgress}}></motion.div>
                    <motion.div className='w-full py-[40vh]' >
                        
                        {/* <TechnicalCard setCurrentImage={setCurrentImage} information={softskills} title='Soft Skills'></TechnicalCard> */}
                    </motion.div>
                    <div className='w-full sticky top-0 h-[100vh] flex items-center'>
                        <motion.div className='w-full aspect-square flex justify-center items-center'>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
    </div>
  )
}
