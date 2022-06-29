import React from 'react'
import CardComponent from '../component/CardComponent'
import RoundedContainer from '../component/RoundedContainer'

const Homepage = (props) => {
	return (
		<>
			<div className="h-screen w-screen bg-color flex items-center flex-col text-white py-8">
				<div className='flex w-6/12'>
					<div>
						<img className='h-24 w-24 rounded-lg shadow-lg' src="https://preview.redd.it/h8mzgb7vpo371.jpg?auto=webp&s=9d4e4022e9b6bb90b530adc6507f239bd6df4a8f" alt="" />
					</div>

					<div className='flex flex-col ml-6 py-3'>
						<div className='text-2xl font-bold'>Good morning, Dax</div>
						<div className='text-lg mt-2'>There is hope, even when your brain tells you there isn&#8217;t</div>
					</div>
				</div>

				<div className='flex w-6/12 gap-x-6 overflow-x-scroll mt-8  custom-shadow'>
					{
						props.filters.map((element) => {
							return <RoundedContainer key={element} text={element} />
						})
					}
				</div>

				<div className='p-4 px-12 support-container w-6/12 rounded-xl mt-3 flex justify-between items-center shadow-xl'>
					<p className='text-lg'>Support our community by donating</p>
					<button className='px-3 py-2 bg-color rounded-lg font-bold hover:shadow-lg shadow-none duration-300'>Donate Now</button>
				</div>

				{/* cards */}
				<div className='w-6/12 hidden grid-cols-2 justify-items-center '>
					<CardComponent/>
					<CardComponent/>
					<CardComponent/>
					<CardComponent/>
					<CardComponent/>
				</div>
			</div>
		</>
	)
}

export default Homepage