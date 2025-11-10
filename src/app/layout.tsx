import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Main, Nav } from '@/components'
import { Toaster } from 'sonner'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Expace - class platform',
	description: 'class register form',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div id="layout-container">
					<Nav />
					<Main>{children}</Main>
					{/* <Footer /> */}
					<Toaster />
				</div>
			</body>
		</html>
	)
}
