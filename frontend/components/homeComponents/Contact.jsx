import React from 'react'

const Contact = () => {
  return (
<div className='my-36'>

    <h1 className='text-5xl text-[#FAFAFA] font-extrabold leading-[48px] tracking-[-0.012em] text-center'>Get in touch</h1>
    {/* //styleName: h5;
font-family: Inter;
font-size: 18px;
font-weight: 400;
line-height: 18px;
text-align: center; */}

    <h5 className='text-lg font-normal text-[#FAFAFA] my-6 leading-[18px] text-center'>Request a demo, or hop on a call.</h5>
    <button className="bg-[#FAFAFA] px-4 py-1 flex items-center justify-center text-center max-w-fit rounded-[6px] mx-auto ">
        <span className="flex">
      <p className="text-sm font-semibold text-left leading-7 text-[#18181B]">Get Started</p>
          <svg
            width="6"
            className="dark:text-white my-auto ml-2.5"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9L5 5L1 1"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
      </div>
  )
}

export default Contact