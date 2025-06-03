import React from 'react'

const page = ({params}) => {
     const {userName} = params;
  return (
    <div className=' text-white'>
        <h1>this is page of user {userName}</h1>
    </div>
  )
}

export default page