import { AdminMain, AdminNav, Aside } from '@/components'

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div id="user-layout-container">
			<div className="flex flex-col min-h-screen">
				<div className="flex flex-1">
					<Aside />
					<AdminNav />
					<AdminMain>{children}</AdminMain>
				</div>
			</div>
		</div>
	)
}
