'use client'
import Image from 'next/image'
import globus from './image/globus.svg'
import { scrollToSection } from '@/hooks/scrollToSection'

export const Header = () => {
	return (
		<>
			<header className='sticky top-0 z-10 bg-white w-full border-b-2 shadow-lg flex flex-row justify-between items-center pt-5 pb-5  px-5'>
				<div
					onClick={() => scrollToSection('wrapper')}
					className='cursor-pointer flex flex-row gap-2 items-center font-semibold'
				>
					<Image src={globus} alt='location' priority />
					<p className='font-semibolb text-base'>VPN</p>
				</div>
				<button
					onClick={() => scrollToSection('nameBox')}
					className='border py-3 px-6 text-sm text-white font-semibold rounded-full bg-[#3177F2]'
				>
					Get VPN
				</button>
			</header>
		</>
	)
}
