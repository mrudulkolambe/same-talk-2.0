import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nickname = () => {
	let name = "Mrudul"
	const [nickname, setNickname] = useState('')
	return (
		<>
			<div className='h-screen w-screen bg-white flex items-center justify-center flex-col'>
				<h1 className='text-5xl'>Do you have any nickname <span className='text-color'>{name}</span>?</h1>

				<div className='mt-16 w-full flex items-center flex-col'>
					<div className='flex flex-col w-4/12'>
						<label htmlFor="nickname">Enter Your Nickname: </label>
						<input id='nickname' type="text" placeholder='Enter Your Nickname' className='mt-2 focus:border-blue-600 duration-300 outline-none border-2 rounded-lg px-5 py-4 w-full' />
					</div>
					<button className='mt-5 py-4 px-3 w-4/12 btn-gradient rounded-lg text-white font-bold'>Next</button>
				</div>
				<div className='mt-12 text-lg'>
					<p>You can change your name later from your profile settings</p>
					<Link to="/onboaring"><p className='text-center mt-5 text-color'>Skip</p></Link>
				</div>
			</div>
		</>
	)
}

export default Nickname