import Image from 'next/image'
import ResponsiveMenu from '../navigation/responsive-menu'
import logo from '@/assets/logo.png'
import Link from 'next/link'

export default function Header() {
	return (
		<header className="flex justify-between items-center p-8">
			<Link href={'/'}>
				<Image src={logo} alt="Logo" width={50} height={50} />
			</Link>
			<ResponsiveMenu />
		</header>
	)
}
