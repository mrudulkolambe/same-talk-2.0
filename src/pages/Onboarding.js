import React from 'react'

const Onboarding = () => {
	return (
		<>
			<div className='h-screen w-screen bg-white flex items-center justify-center flex-col'>
				<h1 className='text-5xl'>Before You Start i have few <span className='text-color'>questions</span></h1>
				<h1 className='text-5xl mt-2'>that will help me to personalize your experience.</h1>
				<button className='mt-24 py-4 px-3 w-4/12 btn-gradient rounded-lg text-white font-bold text-lg'>Ask Me</button>
			</div>
		</>
	)
}

export default Onboarding