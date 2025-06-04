import React from 'react'

const page = async ({ params }) => {
  const { userName } = await  params;
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

      <div>
        
      </div>

      


    </div>
  )
}

export default page