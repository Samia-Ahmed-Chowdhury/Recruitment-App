'use client'

import { usePathname } from 'next/navigation'
import style from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const liList = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Find Jobs', link: '/find_jobs' },
  { id: 3, title: 'Find Candidate', link: '/find_candidate' },
  { id: 4, title: 'Statistics', link: '/statistics' },
  { id: 5, title: 'Blog', link: '/blog' }
]

function Navbar() {
  const pathname = usePathname()
  return (
    <div className=" bg-bgColor">
      <div className='navbar mx-auto max-w-7xl'>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="space-y-3 shadow glass  menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
            {
              liList.map(li => {
                const isActive = pathname.startsWith(li.link)
              
                return (
                  <li className={style.li_style} key={li.id}>
                    <Link className={isActive ? 'text_decoration' : 'text-black'} href={`${li.link}`}>
                      {li.title}
                    </Link>
                  </li>
                )
              }
              )
            }
            </ul>
          </div>
         <div className='w-full'>
         <Image src="/logo.png" alt='logo' width={150} height={50} priority />
         </div>
        </div>
        <div className="navbar-center py-2 hidden lg:flex">
          <ul className="space-x-2 menu menu-horizontal px-1 ">
            {
              liList.map(li => {
                const isActive = pathname.startsWith(li.link)
                return (
                  <li className={style.li_style} key={li.id}>
                    <Link className={isActive ? 'text_decoration' : 'text-black'} href={`${li.link}`}>
                      {li.title}
                    </Link>
                  </li>
                )
              }
              )
            }
          </ul>
        </div>
        <div className="navbar-end space-x-6">
          <li className={style.li_style}>
            <Link href='/login'>
              Login
            </Link>
          </li>
          <a className="my_button">Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar