'use client'

import { Suspense, useState } from 'react'
import { CourseSelect, StudentList } from '.'
import { Course, courses } from '@/constants/courses'
import { Loading } from '../loader'

const StudentListWithTrigger = () => {
	const [course, setCourse] = useState<Course>(courses[0])

	return (
		<>
			<CourseSelect value={course} setValue={setCourse} />
			<Suspense fallback={<Loading />}>
				<StudentList currentCourse={course} />
			</Suspense>
		</>
	)
}

export default StudentListWithTrigger
