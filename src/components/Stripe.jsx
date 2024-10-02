import React from 'react'

const Stripe = ({val}) => {
    
  return (
    <div className='w-[16.66%] px-8 py-5 border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-600 flex justify-between gap-2 items-center'>
        <img src={val.url} alt="" />
        <span className=' font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe