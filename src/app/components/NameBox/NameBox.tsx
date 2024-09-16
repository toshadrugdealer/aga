'use client'
import { useEffect, useState } from 'react'
import { fetchUsers, IUser } from '@/hooks/fetchUsers'
import Image from 'next/image'
import { Button } from '../Button/Button'
import { Modal } from '../Modal/Modal'
import checkbox from './image/checkboxq.svg'

export const NameBox = () => {
	const [users, setUsers] = useState<IUser[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	useEffect(() => {
		fetchUsers()
			.then(data => {
				setUsers(data)
				setLoading(false)
			})
			.catch(err => {
				setError(err.message)
				setLoading(false)
			})
	}, [])
	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [isModalOpen])

	const toggleChecked = (id: string | null) => {
		setUsers(prevUsers =>
			prevUsers.map(user =>
				user.id === id
					? { ...user, isChecked: true }
					: { ...user, isChecked: false }
			)
		)
	}
	const openModal = () => {
		const checkedUser = users.find(user => user.isChecked)
		if (checkedUser) {
			setIsModalOpen(true)
		}
	}
	if (error) {
		return <div>Ошибка: {error}</div>
	}

	return (
		<>
			{loading ? (
				<div className='mb-10 text-[#3177F2] text-3xl font-bold'>
					Loading...
				</div>
			) : (
				<>
					<div id='nameBox' className='w-full mb-10 flex flex-col gap-4'>
						<p className='text-3xl font-bold mb-3'>
							CHOOSE <span className='text-[#3177F2]'>YOUR NAME</span>
						</p>

						<>
							{users.map(user => (
								<div
									key={user.id}
									className='w-full flex flex-row items-center h-1  border-2 p-10 gap-2 rounded-2xl shadow-md'
								>
									<div
										onClick={() => toggleChecked(user.id)}
										className='w-6 h-6 border-2 rounded-full cursor-pointer'
									>
										{user.isChecked && (
											<Image src={checkbox} alt='Next.js logo' priority />
										)}
									</div>
									<p className='text-base font-bold'>{user.name}</p>
								</div>
							))}
						</>
						<Button onClick={openModal}>Get VPN</Button>
					</div>
					{isModalOpen && (
						<Modal setIsModalOpen={setIsModalOpen} users={users} />
					)}
				</>
			)}
		</>
	)
}
