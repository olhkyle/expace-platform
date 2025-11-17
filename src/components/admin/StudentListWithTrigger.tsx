'use client'

import { Suspense, useState } from 'react'
import { Loading, CourseSelect, StudentList } from '@/components'
import { Course, courses } from '@/constants/courses'

const StudentListWithTrigger = () => {
	const [course, setCourse] = useState<Course>(courses[0])

	return (
		<div>
			<CourseSelect value={course} setValue={setCourse} />
			<Suspense fallback={<Loading />}>
				<StudentList currentCourse={course} />
			</Suspense>
		</div>
	)
}

export default StudentListWithTrigger
