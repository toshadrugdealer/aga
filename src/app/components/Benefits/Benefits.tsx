import Image from 'next/image'
import image1 from './image/icon1.svg'
import image2 from './image/icon2.svg'
import image3 from './image/icon3.svg'
import image4 from './image/icon4.svg'
import styles from './Benefits.module.scss'

export const Benefits = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.div1}>
					<Image src={image1} alt='Next.js logo' priority />
					<p className='text-[#FF5D17] font-bold text-2xl'>UNLIMITED</p>
					<p className='text-[#3177F2] font-bold text-2xl'>ACCESS TO CONTENT</p>
					<p className='text-[#646464] text-base font-semibold'>
						Enjoy unlimited bandwidth to stay connected to the worlds best
						shows, apps, and games!
					</p>
				</div>
				<div className={styles.div2}>
					<Image src={image2} alt='Next.js logo' priority />
					<p className='text-[#FF5D17] font-bold text-2xl'>FLASHING</p>
					<p className='text-[#3177F2] font-bold text-2xl'>CONNECTING SPEED</p>
					<p className='text-[#646464] text-base font-semibold'>
						VPN Lumos offers unlimited bandwidth for faster loading and no
						buffering!
					</p>
				</div>
				<div className={styles.div3}>
					<Image src={image3} alt='Next.js logo' priority />
					<p className='text-[#FF5D17] font-bold text-2xl'>HIDE</p>
					<p className='text-[#3177F2] font-bold text-2xl'>YOUR LOCATION</p>
					<p className='text-[#646464] text-base font-semibold'>
						Get your own unique IP for added security and access to restricted
						sites, apps, and services!
					</p>
				</div>
				<div className={styles.div4}>
					<Image src={image4} alt='Next.js logo' priority />
					<p className='text-[#FF5D17] text-2xl font-bold'>BLOCKED SITES</p>
					<p className='text-[#3177F2] text-2xl font-bold'>SITES</p>
					<p className='text-[#646464] text-base font-semibold'>
						Access any website safely and anonymously!
					</p>
				</div>
				<p className='text-[#3177F2] my-10 text-2xl font-bold col-span-2'>
					Millions of people trust us!
				</p>
			</div>
		</>
	)
}
