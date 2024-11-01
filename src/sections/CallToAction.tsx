"use client"
import ArrowRight from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className='section-heading relative'>
          <h2 className="section-title">Inscreva-se gratuitamente hoje</h2>
          <p className="section-description mt-5">
            Celebre a realização da alegria com um aplicativo projetado para rastrear seu progresso e motivar seus esforços.
          </p>
          <motion.img 
            src={starImage.src}
            alt='Star image'
            width={360}
            className='absolute -left-[350px] -top-[137px]'
            style={{
              translateY,
            }}
          />
          <motion.img  
            src={springImage.src}
            alt='Star image'
            width={360}
            className='absolute -right-[331px] -top-[19px]'
            style={{
              translateY,
            }}
          />
        </div>
      </div>
      <div className="flex gap-2 mt-10 justify-center">
        <button className="btn btn-primary">Obtenha de graça</button>
        <button className="btn btn-text gap-1">
          <span>Saiba mais</span>
          <ArrowRight 
            className='h5 w-5'
          />
        </button>
      </div>
    </section>
  );
};
