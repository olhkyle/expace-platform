import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components'
import { courses } from '@/constants/courses'
import { Dispatch, SetStateAction } from 'react'

interface CourseSelectProps<T extends string> {
	value: T
	setValue: Dispatch<SetStateAction<T>>
}

export default function CourseSelect<T extends string>({
	value,
	setValue,
}: CourseSelectProps<T>) {
	return (
		<Select onValueChange={(value: T) => setValue(value)} defaultValue={value}>
			<SelectTrigger size="default" className="w-full cursor-pointer">
				<SelectValue placeholder="Select Course" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{courses.map(course => (
						<SelectItem key={course} value={course} className="cursor-pointer">
							{course}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
