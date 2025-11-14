import { StudentListWithTrigger } from '@/components/admin'

export default async function AdminPage() {
	return (
		<section className="p-4">
			<h2 className="mb-4 text-base font-bold">수강생 리스트</h2>
			<StudentListWithTrigger />
		</section>
	)
}
