import Link from 'next/link'

export default async function NotFound() {
	return (
		<div className="flex-1 ui-flex-center h-screen">
			<Link href={'/'} className="p-3 bg-black text-white rounded-lg">
				Go To Home
			</Link>
		</div>
	)
}
