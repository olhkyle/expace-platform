import { Main, Nav } from '@/components'

export default function UserLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div id="user-layout-container">
			<Nav />
			<Main>{children}</Main>
		</div>
	)
}
