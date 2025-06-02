import React from 'react'

const NavBar = () => {
    return (
        <div className='bg-blue-950 text-white p-2 flex  justify-between'>
            <div className=" text-lg font-bold">
                 Get me a chai?
            </div>

            <div className="">
                <ul className='flex gap-2'>
                    <li>home</li>
                    <li>about</li>
                    <li>projects</li>
                    <li>singup</li>
                    <li>login</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar