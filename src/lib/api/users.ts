import { RegisterFormSchema } from '@/components'
import { UserType } from '@/models/user'
import axios from 'axios'

const API_URL = '/api/users'

const fetchUsers = async (): Promise<UserType[]> => {
	const { data } = await axios.get(API_URL)

	return data
}

const createUser = async (values: RegisterFormSchema) => {
	return await axios.post('/api/users', values)
}

const deleteUser = async ({
	id,
}: {
	id: string
}): Promise<{ data: { data: UserType; message: string }; status: number }> => {
	const { data, status } = await axios.delete(`/api/users/${id}`)

	return { data, status }
}

export { fetchUsers, createUser, deleteUser }
