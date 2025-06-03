"use client"
import React , {useEffect}from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const page = () => {
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
    return <div className='text-white'>This is the dashboard page</div>;
  }
}

export default page