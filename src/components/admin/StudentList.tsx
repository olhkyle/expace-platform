'use client'

import { useEffect, useState } from 'react'
import { Course } from '@/constants/courses'
import { useLoading } from '@/hooks'
import { UserType } from '@/models/user'
import axios from 'axios'

interface StudentListProps {
	currentCourse: Course
}

export default function StudentList({ currentCourse }: StudentListProps) {
	const { startTransition, isLoading, Loading } = useLoading()
	const [students, setStudents] = useState<UserType[]>([])

	const getUsers = async () => {
		try {
			const { data } = await startTransition(axios.get('/api/users'))

			setStudents(
				data.filter((user: UserType) => user.course === currentCourse),
			)
		} catch (e) {
			console.error(e)
			setStudents([])
		}
	}

	useEffect(() => {
		getUsers()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentCourse])

	return (
		<div className="flex justify-center items-center min-w-[300px] min-h-[200px]">
			{isLoading ? (
				<Loading className="animate-spin" />
			) : (
				<>
					{students?.length === 0 ? (
						<div>⚠️ Empty Data</div>
					) : (
						<ul className="flex flex-col gap-4 mt-8 w-full">
							<li className="flex gap-6 font-bold">
								<div>Name</div>
								<div>Email</div>
							</li>
							{students?.map(student => (
								<li key={student._id.toString()} className="flex gap-6">
									<div className="font-bold">{student.name}</div>
									<div>{student.email}</div>
								</li>
							))}
						</ul>
					)}
				</>
			)}
		</div>
	)
}
