import { useState } from 'react'
import Router from 'next/router'

export default function ContactUs() {
	const [state, setState] = useState({ email: '', mesage: '' })
	const GOOGLE_FORM_MESSAGE_ID = 'entry.297203282'
	const GOOGLE_FORM_EMAIL_ID = 'entry.1884223637'
	const GOOGLE_FORM_ACTION_URL =
		'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfLnVTM9M7ejfQDNjxvMo718td7RMfWiHymU3QLsYQdWfwKQw/formResponse'
	const sendMessage = () => {
		const formData = new FormData()
		formData.append(GOOGLE_FORM_MESSAGE_ID, state.message)
		formData.append(GOOGLE_FORM_EMAIL_ID, state.email)
		fetch(GOOGLE_FORM_ACTION_URL, {
			method: 'POST',
			body: formData,
		})
	}

	const handleSubmit = event => {
		event.preventDefault()
        sendMessage()
        Router.push('/')
	}

	const handleChange = (event, fieldName) => {
		setState({ ...state, [fieldName]: event.target.value })
	}

	return (
		<>
			<div className='mx-auto w-full my-10 block p-6 rounded-lg shadow-lg bg-white max-w-sm'>
				<form onSubmit={handleSubmit}>
					<div className='form-group mb-6'>
						<label className='form-label inline-block mb-2 text-gray-700'>
							Email address
						</label>
						<input
							type='email'
							name='email'
							onChange={e => handleChange(e, 'email')}
							className='form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
							placeholder='Enter email'
						/>
						<small
							id='emailHelp'
							className='block mt-1 text-xs text-gray-600'
						></small>
					</div>
					<div className='form-group mb-6'>
						<label className='form-label inline-block mb-2 text-gray-700'>
							Message
						</label>
						<textarea
							type='message'
							onChange={e => handleChange(e, 'message')}
							rows='12'
							className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
							placeholder='Message'
						/>
					</div>

					<button
						type='submit'
						className='
      px-6
      py-2.5
      bg-orange
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out'
					>
						Submit
					</button>
				</form>
			</div>

		
		</>
	)
}
