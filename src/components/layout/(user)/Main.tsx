import { ReactNode } from 'react'

interface MainProps {
	children: ReactNode
}

export default function Main({ children }: MainProps) {
	return (
		<main className="flex justify-center items-center mt-14 mx-auto text-black bg-white sm:max-w-[800px]">
			{children}
		</main>
	)
}
