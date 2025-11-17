import { routes } from '@/constants/routes'
import Link from 'next/link'
import { Button } from '@/components/ui'

export default function Nav() {
	return (
		<nav className="fixed top-0 left-0 right-0 flex justify-center items-center my-0 mx-auto px-3 w-full border-b border-gray-100 bg-gray-50 z-10">
			<div className="flex justify-between items-center min-w-[300px] min-h-14 w-full sm:max-w-[800px]">
				<h1 className="flex justify-center items-center text-lg font-bold font-mono rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
					<Link href={routes.USER.ROOT} className="py-3 px-1.5 w-full h-full">
						expace
					</Link>
				</h1>

				<Button type="button" variant="default" size="default" asChild>
					<Link href={routes.USER.REGISTER}>Register</Link>
				</Button>
			</div>
		</nav>
	)
}
