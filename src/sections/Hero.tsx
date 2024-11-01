"use client";

import ArrowIcon from  '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import cylinderImage from '@/assets/cylinder.png';
import nodleImage from '@/assets/noodle.png';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionValueEvent 
} from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef();
  const { scrollYProgress } = useScroll ({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);

  return (
    <section 
      ref={heroRef} 
      className='pt-8 pb-20 md:pb-10 md:pt-5 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'
    >
      <div className="container">
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <div className="tag">
              Versão 2.0 está aqui
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Caminho para produtividade
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebre a alegria de realizar um aplicativo projetado para acompanhar seu progresso, motivar seus esforços e celebrar seus sucessos.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">
                Obtenha de graça 
              </button>
              <button className="btn btn-text gap-1">
                <span>
                  Saibar mais
                </span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <motion.img 
              src={cogImage.src} 
              alt='Cog image' 
              className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0' 
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 2,
                ease: 'easeInOut',
              }}
            />
            <motion.img 
              src={cylinderImage.src} 
              alt='Cylinder image' 
              width={220} 
              height={220}
              className='hidden md:block -top-8 -left-32 md:absolute'
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
            <motion.img 
              src={nodleImage.src}
              alt='Noodle image'
              width={220}
              height={220}
              className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]'
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
};
