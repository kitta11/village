import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer.component'
import Breadcrumb from '@/components/navigation/breadcrumb'

// If loading a variable font, you don't need to specify the font weight
const nunitoSans = Nunito_Sans({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Village',
	description: 'An imaginary village website',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${nunitoSans.className}  antialiased`}>
				<Header />
				<Breadcrumb />
				<div className="overflow-auto p-5">{children}</div>
				<Footer />
			</body>
		</html>
	)
}
