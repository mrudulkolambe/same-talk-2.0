import React, { useState } from 'react'

const Nickname = () => {
	let name = "Mrudul"
	const [nickname, setNickname] = useState('')
	return (
		<>
			<div className='h-screen w-screen bg-white flex items-center justify-center'>
				<h1 className='text-5xl'>Do you have any nickname <span className='text-color'>{name}</span> ?</h1>

				<div>
					<label htmlFor="nickname">Enter Your Nickname: </label>
					<input id='nickname' type="text" placeholder='Enter Your Nickname' />
					<button>Next</button>
				</div>
			</div>
		</>
	)
}

export default Nickname