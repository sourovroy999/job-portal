import React from 'react';
import { easeInOut, motion } from 'motion/react';

import headerimgteam from "../../assets/HeadersImage/young-joyful-business-people-happily-working-laptop-together-group-smiling-men-women-spending-time-modern-cozy-office.jpg"

import headerWinning from '../../assets/HeadersImage/inspire-your-teamwork-keep-achieving-group-asian-team-creative-business-people-hand-raise-up-partnership-teamwork-concept-modern-office-background.jpg'

const Banner = () => {
    return (
     <div className="hero bg-base-200 min-h-96 max-w-6xl mx-auto ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1 '>
      <div className='flex flex-col '>
        <motion.img animate={{y:[40,50,40]}} 
         transition={{duration:8, repeat:Infinity}}
         
         className='w-64 rounded-t-3xl rounded-br-3xl border-blue-400 border-l-[6px] border-b-[6px]' src={headerimgteam} alt="" />

        <motion.img 
         animate={{x:[100,120,100]}} 
         transition={{duration:8,
          delay:4, repeat:Infinity}}
        className='w-64 rounded-t-3xl rounded-br-3xl border-blue-400 border-l-[6px] border-b-[6px] ' src={headerWinning} alt="" />
        </div>
        
    </div>
    
    <div className='flex-1'>
      <motion.h1 animate={{x:50}} transition={{duration:2,delay:1, ease:easeInOut}} className="text-5xl font-bold">Latest <motion.span animate={{color:['#f3ff33','#33ffe8']}} transition={{duration:2, repeat:Infinity}} >Jobs </motion.span> for you!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;