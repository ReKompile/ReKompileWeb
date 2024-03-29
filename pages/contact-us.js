import { useState } from 'react'
import Image from 'next/image'
import Modal from 'react-modal'

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
	}

	const handleChange = (event, fieldName) => {
		setState({ ...state, [fieldName]: event.target.value })
	}

	const [modalIsOpen, setIsOpen] = useState(false)

	function openModal() {
		setIsOpen(true)
	}

	function afterOpenModal() {
		console.log('AFTER OPEN MODAL')
	}

	function closeModal() {
		setIsOpen(false)
	}

	return (
		<>
			<div className='overflow-hidden w-full h-5/6 absolute inset-x-0 bottom-5 z-0'>
				<Image
					src='/contact_us_illustration.svg'
					layout='fill'
					alt='contact us'
					unoptimized
				/>
			</div>

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
						onClick={openModal}
						className='group relative flex w-full justify-center rounded-md border border-transparent bg-orange py-2 px-4 text-sm font-medium text-white hover:bg-orange focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
					>
						Submit
					</button>
				</form>
			</div>
			<ModalElem
				openModal={openModal}
				modalIsOpen={modalIsOpen}
				afterOpenModal={afterOpenModal}
				closeModal={closeModal}
			/>
		</>
	)
}

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}

function ModalElem({ modalIsOpen, afterOpenModal, closeModal }) {
	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='Message Sent'
			>
				<div className='text-center p-8'>
					<div className='text-2xl py-3'>Message succesfully sent</div>
					<div className='opacity-60 pb-1'>
						We hope to get back to you soon.
					</div>
				</div>
				<button
					type='button'
					className='group relative flex w-full justify-center rounded-md border border-transparent bg-orange py-2 px-4 text-sm font-medium text-white hover:bg-orange focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
					onClick={closeModal}
				>
					Close
				</button>
			</Modal>
		</div>
	)
}
