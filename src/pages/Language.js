import React from 'react'
import RoundedContainer from '../component/RoundedContainer'

const Language = (props) => {
	return (
		<>
			<div className='h-screen w-screen bg-color flex items-center justify-center flex-col text-white'>

				<div className='text-4xl'>Select your language</div>
				<div className='flex w-5/12 flex-wrap gap-4 gap-x-6 mt-14 px-9 '>
					{
						props.language.map((element) => {
							return <RoundedContainer key={element} text={element} />
						})
					}
				</div>
				<button className='mt-52 py-3 px-3 w-4/12 btn-gradient rounded-lg text-white font-bold text-lg'>Next</button>
			</div>
		</>
	)
}

export default Language