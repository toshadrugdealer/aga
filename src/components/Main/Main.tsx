'use client'
import Image from 'next/image'
import logo from './image/logo.svg'
import fiveM from './image/fiveM.svg'
import location from './image/location.svg'
import services from './image/servers.svg'
import { scrollToSection } from '@/hooks/scrollToSection'
import { Button } from '../Button/Button'
export const Main = () => {
	return (
		<>
			<main
				id='Main'
				className='mt-12 w-full flex flex-col justify-center gap-8  items-center'
			>
				<h1 className='font-bold text-4xl leading-10 text-center'>
					Access{' '}
					<span className='text-[#3177F2]'>
						everything <br />
						securely{' '}
					</span>
					with <br />
					VPN
				</h1>
				<Image src={logo} alt='Next.js logo' priority />

				<Button onClick={() => scrollToSection('nameBox')} className='w-1/2'>
					Get VPN
				</Button>
				<Image src={fiveM} alt='Next.js logo' width={136} priority />
				<div className='w-full border-2 flex flex-row justify-center rounded-xl shadow-md p-4'>
					<div className='w-2/4 flex justify-center'>
						<div className='relative'>
							<p className='text-2xl font-bold'>50+</p>
							<p className='text-[#646464] text-sm'>Locations</p>
							<Image
								className='absolute top-3 left-[-30px]'
								src={location}
								alt='location'
								priority
							/>
						</div>
					</div>
					<div className='border-l-2'></div>
					<div className='w-2/4 flex justify-center'>
						<div className='relative'>
							<p className='text-2xl font-bold'>1000+</p>
							<p className='text-[#646464] text-sm'>Servers</p>
							<Image
								className='absolute top-3 left-[-30px]'
								src={services}
								alt='location'
								priority
							/>
						</div>
					</div>
				</div>
				<p className='text-[#646464] text-xl text-center leading-6'>
					VPN-your <span className='text-[#3177F2]'>ultimate</span> solution for
					a private and secure online experience!
				</p>
			</main>
		</>
	)
}
