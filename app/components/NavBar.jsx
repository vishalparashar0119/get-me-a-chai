"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

const NavBar = () => {

    const [dropDown, setDropDown] = useState(false)
    const { data: session, status } = useSession();
   

    return (
        <div className='bg-blue-950 text-white p-2 flex  justify-between'>
            <div className=" flex items-center text-lg font-bold gap-2">
                <img src="/tea.gif" alt="" width={40} height={40} />
                <h1>Get me a chai?</h1>
            </div>

            <div className="">


                <ul className='flex items-center gap-2 '>

                    {session && <li className=' relative '>


                        <button onClick={() => setDropDown(!dropDown)} data-dropdown-toggle="dropdown" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcom {session.user.name} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>

                        <div id="dropdown" className={`z-10 absolute ${dropDown ? "" : "hidden"}  left-2 bottom-[-170px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <Link href="/dashboard"className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                                </li>
                                <li>
                                    <button onClick={() => signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-start">Sign out</button>
                                </li>
                            </ul>
                        </div>


                    </li>}

                    <li>
                        {!session && <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">SignUp</button>

                        }
                    </li>
                    <li><Link href="/login">
                        {
                            session ? <div className='w-5 h-5 rounded-full bg-slate-950'></div> : <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center   " >LogIn</button>
                        }
                    </Link>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar