import React from 'react'

const CardComponent = () => {
	return (
		<>
			<div className='bg-white p-4 rounded-3xl w-11/12 flex flex-col items-center shadow-2xl  border'>
				<div>
					<img className='h-40 w-40 rounded-full' src="https://preview.redd.it/h8mzgb7vpo371.jpg?auto=webp&s=9d4e4022e9b6bb90b530adc6507f239bd6df4a8f" alt="" />
				</div>
				<div className='flex flex-col items-center text-black mt-4'>
					<p className='font-extrabold text-xl'>Antony Stark</p>
					<p className='text-base'>Iron Man Istriwala</p>
				</div>
				<div className='text-black mt-5 font-bold'>Rating: 5.0</div>
			</div>
		</>
	)
}

export default CardComponent