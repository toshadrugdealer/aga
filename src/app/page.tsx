import { Benefits } from '@/components/Benefits/Benefits'
import { Header } from '@/components/Header/Header'
import { Main } from '@/components/Main/Main'
import { NameBox } from '@/components/NameBox/NameBox'

export default function Home() {
	return (
		<div className='flex flex-col justify-between items-center justify-items-center min-h-screen'>
			<Header />
			<div id='wrapper' className='w-2/3 flex flex-col items-center'>
				<Main />
				<Benefits />
				<NameBox />
			</div>
		</div>
	)
}
