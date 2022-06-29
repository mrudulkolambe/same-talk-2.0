import React from 'react'

const RoundedContainer = (props) => {
	return (
		<>
			<div className='text-center px-3 py-2 rounded-full border hover:bg-white duration-300 text-hover-color font-semibold cursor-pointer w-max'>{props.text}</div>
		</>
	)
}

export default RoundedContainer