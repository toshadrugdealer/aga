import { IUser } from '@/hooks/fetchUsers'
import Image from 'next/image'
import { FC, useState } from 'react'
import suppotrTextImg from './image/suppotrTextImg.svg'
import close from './image/close.svg'
import { Button } from '../Button/Button'

interface ModalProps {
	users: IUser[]
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const Modal: FC<ModalProps> = ({ users, setIsModalOpen }) => {
	const [email, setEmail] = useState<string>('')
	const [error, setError] = useState<string | null>(null)
	const name = users.find(user => user.isChecked)?.name

	const validateEmail = (email: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return re.test(String(email).toLowerCase())
	}
	const handleSubmit = () => {
		if (validateEmail(email)) {
			console.log('Email:', email)
			setError(null)
			setEmail('')
			setIsModalOpen(false)
		} else {
			setError('Please enter a valid email address')
		}
	}
	return (
		<div className='fixed w-screen h-screen bg-white'>
			<div className='relative mt-12 mx-auto w-3/4'>
				<h2 className='text-4xl font-bold mb-4'>YOUR NAME</h2>
				<p className='text-lg'>{name}</p>
				<input
					placeholder='Enter your email'
					className='w-full border py-2 px-4 rounded-xl mt-4 '
					type='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				{error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
				<div className='mt-2 flex flex-row gap-1 items-center'>
					<Image src={suppotrTextImg} alt='Suppotr Text image' priority />
					<p className='text-sm font-medium text-[#646464]'>
						Your information is 100% secure. We don’t share your personal
						information.
					</p>
				</div>
				<div
					className='cursor-pointer absolute -top-10 right-0 p-2'
					onClick={() => setIsModalOpen(false)}
				>
					<Image src={close} alt='Suppotr Text image' priority />
				</div>
				<Button onClick={handleSubmit} className='mt-2 w-full'>
					Continue
				</Button>
			</div>
		</div>
	)
}
