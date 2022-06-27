import React from 'react'

const SignUp = () => {
	return (
		<>
			<div className='bg-color h-screen w-screen flex flex-col items-center py-36'>
				<img src="/img/sm-Logo.png" className='main-img' alt="" />
				<button className='bg-white px-8 py-3 flex items-center rounded-lg mt-6'>
					<img src="/img/icons/Google-ico.svg" alt="" />
					<p className='ml-2'>Continue With Google</p>
				</button>
				<div className='text-white text-center text-sm mt-3'>
					<p>by registering you agree to our</p>
					<p><a className='a-color cursor-pointer'>terms of service</a> and <a className='a-color  cursor-pointer'>privacy policy</a></p>
				</div>
				<div className='text-white text-center text-lg mt-8'>
					<p>Already have an sametalk account?</p>
					<p className='a-color cursor-pointer mt-1 font-bold'>Login Here</p>
				</div>
				<div className='text-white text-center text-lg mt-8'>
					<p>Become SameTalk Volunteer</p>
					<p className='a-color cursor-pointer mt-1 font-bold'>Join Now</p>
				</div>
			</div>
		</>
	)
}

export default SignUp