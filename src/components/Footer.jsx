import React from 'react'

function Footer() {
  return (
    <div className='w-full px-10'>
        <div className="max-w-screen-xl mx-auto py-10 flex gap-3">
            <div className="basis-1/2">
                <h1 className='text-[11.5rem] leading-none font-semibold tracking-tight '>refocus.</h1>
            </div>
            <div className="basis-1/2 flex gap-4">
                <div className="basis-1/3">
                    <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                    {["instagram","twitter (x?)","LinkedIn"].map((item,index)=> <a key={index} className='block mt-2 capitalize'>{item}</a>)}
                </div>
                <div className="basis-1/3">
                    <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                    {["instagram","twitter (x?)","LinkedIn"].map((item,index)=> <a key={index} className='block mt-2 capitalize'>{item}</a>)}
                </div>
                <div className="basis-1/2 flex flex-col items-end">
                    <p className='text-right '>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                    <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg" className='w-32 mt-10' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer