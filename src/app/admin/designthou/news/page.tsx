import { Loading } from '@/components'
import { NewsList } from '@/components/admin'
import { Suspense } from 'react'

export default async function DesignthouNewsPage() {
	return (
		<section className="p-4">
			<h2 className="font-bold">News List</h2>
			<Suspense fallback={<Loading />}>
				<NewsList />
			</Suspense>
		</section>
	)
}
