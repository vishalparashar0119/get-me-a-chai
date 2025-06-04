"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const page = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userName: '',
    profilePic: '',
    coverPic: '',
    razorPayId: '',
    razorPaySecret: ''

  });

  const handleChange = (e)=>{
      setFormData({...formData , [e.target.name] : e.target.value})
  }

  const submitForm = ()=>{
     console.log(formData);
     alert("submit successfull")
  }
     const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div className='text-white'>Loading...</div>;
  }

  if (status === 'authenticated') {
  return <div className='text-white flex items-center flex-col'>
    <h1 className='lg:text-3xl font-bold my-5'>welcome to your dashboard</h1>
    <div className="lg:w-2/4 flex flex-col items-center gap-2">
      {/*name*/}
      <div className='w-full flex flex-col gap-2'>
        <label htmlFor="" className=''>Name</label>
        <input onChange={handleChange} type="text" className='w-full p-1.5 bg-slate-700 rounded-sm' name='name' value={formData.name} />
      </div>
      {/*email*/}
      <div className='w-full flex flex-col gap-2'>
        <label htmlFor="" className=''>Email</label>
        <input onChange={handleChange} type="text" className='w-full p-1.5 bg-slate-700 rounded-sm' value={formData.email} name='email' />
      </div>
      {/*userName*/}
      <div className='w-full flex flex-col gap-2'>
        <label htmlFor="" className=''>User Name</label>
        <input onChange={handleChange} type="text" className='w-full p-1.5 bg-slate-700 rounded-sm' value={formData.userName}  name='userName'/>
      </div>
      {/*profile pitchure*/}
      <div className='w-full flex flex-col gap-2'>
        <label htmlFor="" className=''>Profile Picture</label>
        <input onChange={handleChange} type="text" className='w-full p-1.5 bg-slate-700 rounded-sm' value={formData.profilePic} name='profilePic' />
      </div>
      {/*cover pic*/}
      <div className='w-full flex flex-col gap-2'>
        <label htmlFor="" className=''>Cover Picture</label>
        <input onChange={handleChange} type="text" className='w-full p-1.5 bg-slate-700 rounded-sm' value={formData.coverPic} name='coverPic'/>
      </div>
      {/*input razor pay id*/}
      <div className='w-full flex flex-col gap-2'>
        <label htmlFor="" className=''>RazorPay Id</label>
        <input onChange={handleChange} type="text" className='w-full p-1.5 bg-slate-700 rounded-sm' value={formData.razorPayId} name='razorPayId' />
      </div>
      {/*input razor pay secret*/}
      <div className='w-full flex flex-col gap-2'>
        <label htmlFor="" className=''>RazorPay Secret</label>
        <input onChange={handleChange} type="text" className='w-full p-1.5 bg-slate-700 rounded-sm' value={formData.razorPaySecret} name='razorPaySecret' />
      </div>
      {/* submit button */}
      <div className='w-1/4 mt-1'>
        <button onClick={submitForm} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full">Save</button>
      </div>

    </div>

  </div>;
  }
}

export default page