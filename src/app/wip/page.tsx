import Image from 'next/image'
import addImage from '/public/add-complete.png'
import Link from 'next/link'
import { routes } from '@/constants/routes'
import { Button } from '@/components'

export default async function WipPage() {
	return (
		<section className="mt-4">
			<div className="flex flex-col items-center">
				<div className="flex justify-center items-center p-10 w-100">
					<Image
						src={addImage}
						alt="add complete"
						className="block w-full h-full"
						loading="lazy"
						placeholder="blur"
					/>
				</div>
				<Button variant="link" asChild>
					<Link href={routes.HOME}>홈으로 가기</Link>
				</Button>
			</div>
		</section>
	)
}
