'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { UserType } from '@/models/user'
import { Loading } from '../loader'

export default function NewsList() {
	const [news, setNews] = useState<UserType[]>([])
	const [isLoading, setLoading] = useState(false)

	const getNews = async () => {
		setLoading(true)
		try {
			const { data } = await axios.get<UserType[]>('/api/designthou/news')
			setNews(data)
			console.log(data)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getNews()
	}, [])

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<div>
					{news?.map(item => (
						<div key={item.name}>
							<div>{item.name}</div>
							<div key={item.name}>{item.email}</div>
						</div>
					))}
				</div>
			)}
		</>
	)
}
