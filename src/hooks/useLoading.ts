import { useState } from 'react'
import useIsMountedRef from './useIsMountedRef'
import { Loader } from 'lucide-react'

const useLoading = () => {
	const [isLoading, setIsLoading] = useState(false)
	const ref = useIsMountedRef()

	const startTransition = async <T>(promise: Promise<T>): Promise<T> => {
		try {
			setIsLoading(true)
			const data = await promise
			return data
		} finally {
			if (ref.isMounted) {
				setIsLoading(false)
			}
		}
	}

	return { startTransition, isLoading, Loading: Loader }
}

export default useLoading
