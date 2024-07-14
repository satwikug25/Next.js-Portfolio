"use client";

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-navy-500 relative max-h-16">
        
        <div className="container mx-auto p-8 flex flex-col md:flex-row items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left md:w-1/2 p-4"
          >
            <h1 className="text-4xl font-bold text-white">Satwik Mallajosyula</h1>
            <p className="text-lg text-white mt-4">
              I&apos;m a 
              <span className="text-yellow-300">
                <Typewriter
                  words={[' Computer Science Student @ ASU', ' React Developer', ' Full Stack Developer', ' Software Engineer Intern @ Axio AI']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <p className="text-lg text-white mt-4">
              Welcome to my portfolio! I am Satwik Mallajosyula, a Computer Science student at Arizona State University with a passion for developing innovative software solutions.
            </p>
            <div className="mt-6">
              <Link href="/projects" passHref>
                <span className="text-yellow-300 hover:underline cursor-pointer">View My Projects</span>
              </Link>
            </div>
            <div className="mt-6">
              <Link href="/assets/Satwik_Mallajosyula.pdf" passHref>
                <span className="text-yellow-300 hover:underline cursor-pointer" target="_blank" rel="noopener noreferrer">Download My Resume</span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 p-4 flex justify-center"
          >
            <Image 
              src="/images/satwik.png" 
              alt="Satwik Mallajosyula" 
              width={300} 
              height={300} 
              className="rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
