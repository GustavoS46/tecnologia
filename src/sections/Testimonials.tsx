"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Como designer experiente sempre à procura de ferramentas inovadoras, o Framer.com chamou minha atenção instantaneamente.",
    imageSrc: avatar1.src,
    name: "Maria Oliveira",
    username: "@maria.designer",
  },
  {
    text: "A produtividade de nossa equipe disparou desde que começamos a usar essa ferramenta.",
    imageSrc: avatar2.src,
    name: "Carlos Silva",
    username: "@carlos.silva",
  },
  {
    text: "Este aplicativo transformou completamente como eu gerencio meus projetos e prazos.",
    imageSrc: avatar3.src,
    name: "Fernando Lima",
    username: "@fernando.lima",
  },
  {
    text: "Fiquei impressionado com a rapidez com que fomos capazes de integrar esse aplicativo ao nosso fluxo de trabalho.",
    imageSrc: avatar4.src,
    name: "Lucas Santos",
    username: "@lucas.santos",
  },
  {
    text: "Planejar e executar eventos nunca foi tão fácil. Este aplicativo me ajuda a acompanhar todas as partes móveis, garantindo que nada deslize pelas rachaduras.",
    imageSrc: avatar5.src,
    name: "Mário Costa",
    username: "@mario.costa",
  },
  {
    text: "Os recursos de personalização e integração deste aplicativo são de primeira.",
    imageSrc: avatar6.src,
    name: "Gabriela Almeida",
    username: "@gabriela.almeida",
  },
  {
    text: "O uso deste aplicativo em nossa equipe simplificou nosso gerenciamento de projetos e melhorou a comunicação em geral.",
    imageSrc: avatar7.src,
    name: "Guilherme Pereira",
    username: "@gui.pereira",
  },
  {
    text: "Com este aplicativo, podemos atribuir tarefas facilmente, acompanhar o progresso e gerenciar documentos em um só lugar.",
    imageSrc: avatar8.src,
    name: "Paula Martins",
    username: "@paula.martins",
  },
  {
    text: "Sua interface amigável e recursos robustos suportam nossas diversas necessidades.",
    imageSrc: avatar9.src,
    name: "Pedro Ferreira",
    username: "@pedro.ferreira",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);
const TestimonialsColumn = ( props: {
  className?: string; 
  testimonials: typeof testimonials;
  duration?: number
}) => (
  <div className={props.className}>
    <motion.div animate={{
      translateY: '-50%',
      }} 
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
      className="flex flex-col gap-6 pb-6">
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({
              text,
              imageSrc,
              name,
              username
            }) => (
              <div className="card" key={name}>
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image 
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">
                      {username}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}   
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag mt-5">Testemunhos</div>
          </div>
          <h2 className="section-title mt-5">O que nossos usuários dizem</h2>
          <p className="section-description mt-5">
            Do design intuitivo a recursos poderosos, nosso aplicativo se tornou uma ferramenta essencial para usuários em todo o mundo.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn 
            testimonials={firstColumn} 
            duration={15} />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            duration={19}
            className="hidden md:block" />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            duration={17}
            className="hidden lg:block" />
        </div>   
      </div>
    </section>
  );
};
