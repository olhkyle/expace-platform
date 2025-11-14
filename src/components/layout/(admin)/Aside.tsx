'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { FilePlus, LayoutList, Search } from 'lucide-react'
import { Button } from '@/components/ui'
import { routes } from '@/constants/routes'

const links = [
	{
		title: 'Academy',
		to: routes.ADMIN.ACADEMY,
		icon: <FilePlus size={18} className="text-gray-900" />,
	},
	{
		title: 'Designthou News',
		to: routes.ADMIN.DESIGNTHOU.NEWS,
		icon: <LayoutList size={18} />,
	},
] as const

export default function Aside() {
	const segment = useSelectedLayoutSegment()

	return (
		<div className="relative">
			<aside
				className={`fixed flex-col left-0 hidden py-2 h-full w-14 max-h-screen overflow-y-auto overflow-x-hidden border-muted border-r md:sticky md:flex lg:w-56 lg:p-3`}
			>
				<div className="flex h-full flex-col justify-between gap-2 lg:gap-4">
					<header className="flex justify-between items-center min-h-[36px]">
						<h1 className="inline-flex justify-center item-center py-1.5 px-2">
							<Link
								href={routes.ADMIN.ROOT}
								className="text-sm font-bold font-mono text-center lg:text-lg"
							>
								expace
							</Link>
						</h1>
						<Button type="button" variant="ghost" size="icon-sm">
							<Search size={18} className="text-gray-900" />
						</Button>
					</header>
					<nav className="flex flex-col flex-1 gap-2 md:px-2 lg:px-0">
						{links.map(({ title, to, icon }) => (
							<Link
								href={to}
								key={to}
								className={`ui-flex-center gap-0 py-1.5 px-2 min-h-[36px] ${
									to === routes.ADMIN.ROOT + segment ? 'bg-muted' : 'bg-white'
								} text-gray-800 font-medium rounded-md hover:bg-muted active:bg-gray-200 transition-colors lg:gap-2 lg:justify-between`}
							>
								<div className="ui-flex-center gap-2">
									{icon}
									<span className="hidden lg:inline">{title}</span>
								</div>
								{to === routes.ADMIN.ROOT + segment && (
									<div className="hidden mr-2 w-1.5 h-1.5 rounded-full bg-black lg:inline-block" />
								)}
							</Link>
						))}
					</nav>
				</div>
				<small className="text-default mx-3 mb-2 mt-1 hidden text-[0.5rem] opacity-50 lg:block">
					© 2025{' '}
					<Link
						href={routes.ADMIN.ROOT}
						className="hover:underline"
						target="_blank"
					>
						expace
					</Link>
				</small>
			</aside>
		</div>
	)
}
