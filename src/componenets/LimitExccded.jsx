import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/contextApi'

function LimitExccded() {
    const {setLoading}= useContext(Context)
    useEffect(()=>{
    setLoading(false)
    },[])
  return (
    <div className='h-full w-full absolute top-0 z-50 bg-gray-900 flex flex-col gap-6 items-center justify-center'>
      <h1 className='text-5xl text-white'>Sorry, But my api call limit exceeded</h1>
      <div className='flex text-4xl text-white'>
                 
              <h1>You can check out the version 2 by clicking here  <a href="https://titansyoutubeclonev2.netlify.app/" target="_blank" rel="noopener noreferrer">🥈</a> </h1>
      </div>
    </div>
  )
}

export default LimitExccded
