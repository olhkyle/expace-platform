export default function AdminMain({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className="flex-1 h-screen grid grid-rows-[1fr] pt-[72px] bg-white overflow-y-scroll md:pt-0">
			{children}
		</main>
	)
}
