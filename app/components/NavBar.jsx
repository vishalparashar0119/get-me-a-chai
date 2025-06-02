import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <div className='bg-blue-950 text-white p-2 flex  justify-between'>
            <div className=" flex items-center text-lg font-bold gap-2">
                <img src="/tea.gif" alt="" width={40} height={40}  />
                <h1>Get me a chai?</h1>
            </div>

            <div className="">
                <ul className='flex items-center gap-2 '>

                <li><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">SignUp</button>
                    </li>
                    <li><Link href={"/login"}>
                        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center   ">LogIn</button></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar