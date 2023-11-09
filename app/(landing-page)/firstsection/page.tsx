'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const FirstSection = () => {
  return (
    <div>
      <section className="md:py-20 py-10 bg-[#E5E4E2]">
        <div className="container mx-auto text-center md:w-1/2">
          <div className="text-6xl flex justify-center md:px-20 pb-10">
            When you have to go, you have to go
          </div>
          <p className="text-lg md:text-xl mb-10">
            Want a coke? Then go buy one
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-black text-white px-6 py-3 rounded-sm">
              BUY
            </button>
            <Link href="/contact">
              <button className="bg-gray-500 text-white px-6 py-3 rounded-sm">
                Too poor
              </button>
            </Link>
          </div>
          <div className="md:pt-10 items-center space-y-10 md:flex justify-center md:mx-auto md:space-x-10">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="px-10 md:px-0"
            >
              <Image
                src="/images/logo/logo-1.svg"
                alt="ill"
                width={400}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FirstSection
