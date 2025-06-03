'use client'
import React ,{useEffect} from 'react'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const page = () => {

   const { data: session, status } = useSession()
   const router = useRouter()

   useEffect(() => {
      if (status === 'authenticated') {
         router.push('/dashboard')
      }
   }, [session, status, router])


   return (<>

      <div className='text-white text-2xl font-bold py-3 px-2'>
         <h1>Login to get you fans support</h1>
         <div className='w-full  flex flex-col justify-center items-center gap-3 lg:py-16'>

            <div className="bg-slate-800 rounded-lg hover:bg-slate-700 py-2  w-1/5 flex gap-2 justify-center items-center ">
               <img src="/auth/google.svg" alt="" width={30} height={30} />
               <span className='text-sm font-semibold'> Continue with google</span>
            </div>

            <div className="bg-slate-800 rounded-lg hover:bg-slate-700 py-2 w-1/5 flex gap-2 justify-center items-center ">
               <img src="/auth/facebook.svg" alt="" width={30} height={30} />
               <span className='text-sm font-semibold'> Continue with facebook</span>
            </div>

            <div className="bg-slate-800 rounded-lg hover:bg-slate-700 py-2 w-1/5 flex gap-2 justify-center items-center ">
               <img src="/auth/twitter.svg" alt="" width={30} height={30} />
               <span className='text-sm font-semibold'> Continue with twitter</span>
            </div>

            <div className="bg-slate-800 rounded-lg hover:bg-slate-700 py-2 w-1/5 flex gap-2 justify-center items-center ">
               <img src="/auth/linkedln.svg" alt="" width={30} height={30} />
               <span className='text-sm font-semibold'> Continue with linkedln</span>
            </div>

            <div className="bg-slate-800 rounded-lg hover:bg-slate-700 py-2 w-1/5 flex gap-2 justify-center items-center " onClick={() => { signIn("github") }}>
               <img src="/auth/github.svg" alt="" width={30} height={30} />
               <span className='text-sm font-semibold'> Continue with github</span>
            </div>

            <div className="bg-slate-800 rounded-lg hover:bg-slate-700 py-2 w-1/5 flex gap-2 justify-center items-center ">
               <img src="/auth/apple.svg" alt="" width={30} height={30} />
               <span className='text-sm font-semibold'> Continue with apple</span>
            </div>
         </div>
      </div>
   </>
   )
}

export default page