"use client"
import React from 'react'
import { useState, use } from 'react';

const page = ({ params }) => {

  const { userName } = use(params);

  const [payment, setPayment] = useState({
    name: "",
    message: "",
    amount: ""

  });

  const handleChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value })
  }

  const fixedPayment = (val)=>{
      setPayment({
    name: "",
    message: "",
    amount: val

  })
  }

  return (
    <div className=' text-white'>
      <div className='w-full h-[55vh] relative'>
        <img src="/patrionbackground.png" alt="" className='w-full h-full object-center object-cover' />

        <div className=' absolute lg:h-[120px] lg:w-[120px] rounded-lg -bottom-[calc(120px/2)] left-[calc(50%-50px)] overflow-hidden'>
          <img src="/patrionart.jpg" alt="" className='w-full h-full object-center object-cover ' />
        </div>
      </div>

      <div className='flex justify-center items-center flex-col my-20 gap-2'>
        <h1 className='lg:text-4xl font-bold'>{userName}</h1>
        <p className='lg:text-sm'>creating Linux, Coding, and Technology Tutorials/Rant Videos</p>
        <ul className='list-disc list-inside flex gap-2 text-sm opacity-50 '>
          <li>232 members</li>
          <li>1 Post</li>
          <li>$387.9/month</li>
        </ul>
      </div>

      <div className='w-4/5 mx-auto flex gap-2 '>

        <div className="w-1/2 bg-slate-900 min-h-[100px] max-h-[200px] p-5 rounded-lg overflow-y-auto">
          <h1 className='text-xl font-bold'>Supporters</h1>
          <ul className='pl-2'>
            <li><span className='text-lg font-bold text-slate-500'>Avi negi</span> : donate <span className='text-green-500'>100$</span> with a message : "<span className='text-amber-400'>This is for rcb ❤️</span>"</li>
            <li><span className='text-lg font-bold text-slate-500'>vishal</span> : donate <span className='text-green-500'>10$</span> with a message : "<span className='text-amber-400'>we support you bhai ❤️</span>"</li>

          </ul></div>
        <div className="w-1/2 bg-slate-900 p-5 rounded-lg">
          <h1 className='text-xl font-bold'>Make a payment</h1>
          <div className='mt-5 flex flex-col gap-3 '>
            <div className='flex flex-col gap-3'>
              <input onChange={handleChange} type="text" className='bg-slate-800 p-2 w-full rounded-sm' placeholder='Enter Name ' value={payment.name} name='name' />
              <input onChange={handleChange} type="text" className='bg-slate-800 p-2 w-full rounded-sm' placeholder='Enter Message' value={payment.message} name='message' />
              <input onChange={handleChange} type="text" className='bg-slate-800 p-2 w-full rounded-sm' placeholder='Enter Amount' value={payment.amount} name='amount' />
            </div>

            <div className='w-1/4'>
              <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full cursor-pointer" >Pay</button>
            </div>

            <div className='flex gap-2' >
              <button onClick={()=> fixedPayment(5)} className='bg-slate-700 py-2 px-5 rounded-lg cursor-pointer'>
                $5
              </button>
              <button onClick={()=> fixedPayment(10)} className='bg-slate-700 py-2 px-5 rounded-lg cursor-pointer '>
                $10
              </button>
              <button onClick={()=> fixedPayment(20)} className='bg-slate-700 py-2 px-5 rounded-lg cursor-pointer '>
                $20
              </button>
            </div>
          </div>
        </div>


      </div>




    </div>
  )
}

export default page