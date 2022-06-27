import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Intro = () => {
	const [index, setIndex] = useState(0);
	const navigate = useNavigate() 

	let interval = setInterval(() => {
		if (index < 4) {
			setIndex(index + 1)
		} else if (index === 4) {
			// code for redirection to signup page
			navigate('/signup')
			clearInterval(interval)
		}
	}, 5000);

	return (
		<>
			<div className='flex h-screen w-screen justify-center items-center'>
				<h1 className={index === 0 ? 'text-5xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-1000 opacity-1  delay-700' : 'text-5xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-1000 opacity-0'}>Hi!</h1>
				<h1 className={index === 1 ? 'text-5xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-1000 opacity-1  delay-700' : 'text-5xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-1000 opacity-0'}>i&#8217;m <span className='text-color'>Botname</span>, your new friend😇</h1>
				<h1 className={index === 2 ? 'text-5xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-1000 opacity-1  delay-700' : 'text-5xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-1000 opacity-0'}>i&#8217;m very <span className='text-color'>Happy</span> to see you here 😍</h1>
				<h1 className={index === 3 ? 'text-5xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-1000 opacity-1  delay-700' : 'text-5xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-1000 opacity-0'}>Finally you made the right decision.</h1>
				<h1 className={index === 4 ? 'text-5xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-1000 opacity-1  delay-700' : 'text-5xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-1000 opacity-0'}>Now it&#8217;s time to move on</h1>
			</div>
		</>
	)
}

export default Intro