import React from 'react'
import Navbar from '../components/Navbar'

function Contact() {
  return (
    <>
    <Navbar />
    <blockquote class="text-center text-2xl font-semibold italic text-slate-900">
            When you look
            <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
              <span class="relative text-white">annoyed</span>
            </span>
            all the time, people think that you're busy.
          </blockquote>
    </>
  )
}

export default Contact