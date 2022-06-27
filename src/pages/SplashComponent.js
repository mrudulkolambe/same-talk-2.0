import React from 'react'
import { useNavigate } from 'react-router-dom'

const SplashComponent = () => {
	const navigate = useNavigate()
	setTimeout(() => {
		navigate('/intro')
	}, 5000);
	return (
		<>
			<div className='bg-color h-screen w-screen flex flex-col items-center py-40 justify-between'>
				<img src="/img/sm-Logo.png" className='main-img' alt="" />
				<div className='text-white text-center'>
					<p>By Dotmg Studio</p>
					<p>Made in india</p>
				</div>
			</div>
		</>
	)
}

export default SplashComponent