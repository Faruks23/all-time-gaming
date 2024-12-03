import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <>
      <footer className=" text-gray-400  border-t border-[#3a4050] h-[50vh]">
      <section className="relative  overflow-hidden  h-full">
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image src="/footer.jpg" alt="Challenge Background" layout="fill" objectFit="cover" className="opacity-30 h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0e17] z-10 h-full w-full"></div>
        <div className="relative z-20 h-full nd ">
        <div className="container mx-auto px-6 text-center h-full  flex items-end justify-center pb-5">
          <p>&copy; 2024 All-Time-gaming. All rights reserved.</p>
          </div>
        </div>
      </section>

        </footer>
    </>
  )
}

export default Footer