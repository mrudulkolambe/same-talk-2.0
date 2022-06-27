import React from 'react'
import FilterContainer from '../component/FilterContainer'

const Filter = () => {

	const filters = ['Depression', 'Anxiety', 'Addiction', 'Advice', 'ADHD', 'Career', 'Loneliness', 'Fear', 'Confidence', 'Relationship', 'Stress', 'Positivity', 'Overthinking', 'Communication', 'Stammering', 'Suicide']

	return (
		<>
			<div className='h-screen w-screen bg-color flex items-center justify-center flex-col text-white'>

				<div className='text-4xl'>Mrudul, What bothers you the most.</div>
				<div className='flex w-6/12 flex-wrap gap-4 gap-x-6 mt-12'>
					{
						filters.map((element) => {
							return <FilterContainer key={element} text={element} />
						})
					}
				</div>
				<button className='mt-72 py-4 px-3 w-4/12 btn-gradient rounded-lg text-white font-bold text-lg'>Next</button>
			</div>
		</>
	)
}

export default Filter