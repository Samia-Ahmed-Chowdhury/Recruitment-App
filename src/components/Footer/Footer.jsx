import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className="footer p-10 mt-12 bg-bgColor text-white  lg:mx-auto max-w-7xl">
      
    <div>
    <Image src="/logo.png" alt='logo' width={150} height={50} priority />
      <p className='text-paragraph_color'>Recruitment Solution.<br/>Providing reliable tech since 1992</p>
    </div> 
    <div className='text-paragraph_color'>
      <span className="footer-title">Services</span> 
      <a className="link link-hover">Branding</a> 
      <a className="link link-hover">Design</a> 
      <a className="link link-hover">Marketing</a> 
      <a className="link link-hover">Advertisement</a>
    </div> 
    <div className='text-paragraph_color'>
      <span className="footer-title">Company</span> 
      <a className="link link-hover">About us</a> 
      <a className="link link-hover">Contact</a> 
      <a className="link link-hover">Jobs</a> 
      <a className="link link-hover">Press kit</a>
    </div> 
    <div className='text-paragraph_color'>
      <span className="footer-title">Legal</span> 
      <a className="link link-hover">Terms of use</a> 
      <a className="link link-hover">Privacy policy</a> 
      <a className="link link-hover">Cookie policy</a>
    </div>
  </footer>
  )
}

export default Footer