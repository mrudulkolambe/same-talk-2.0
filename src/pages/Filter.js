import React from 'react'
import RoundedContainer from '../component/RoundedContainer'

const Filter = (props) => {

	return (
		<>
			<div className='h-screen w-screen bg-color flex items-center justify-center flex-col text-white'>

				<div className='text-4xl'>Mrudul, What bothers you the most.</div>
				<div className='flex w-6/12 flex-wrap gap-4 gap-x-6 mt-12'>
					{
						props.filters.map((element) => {
							return <RoundedContainer key={element} text={element} />
						})
					}
				</div>
				<button className='mt-72 py-4 px-3 w-4/12 btn-gradient rounded-lg text-white font-bold text-lg'>Next</button>
			</div>
		</>
	)
}

export default Filter