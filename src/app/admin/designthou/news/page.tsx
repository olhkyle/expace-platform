import { NewsList } from '@/components/admin'

export default async function DesignthouNewsPage() {
	return (
		<section className="p-4">
			<h2 className="font-bold">News List</h2>
			<NewsList />
		</section>
	)
}
