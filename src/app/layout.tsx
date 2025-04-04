import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/header'
import Breadcrumb from '@/components/navigation/breadcrumb'
import Footer from '@/components/navigation/footer.component'

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
				<div className="overflow-auto px-8">{children}</div>
				<Footer />
			</body>
		</html>
	)
}
