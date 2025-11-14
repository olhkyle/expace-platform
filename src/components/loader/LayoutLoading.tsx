import { Loader } from 'lucide-react'

export default function LayoutLoading() {
	return (
		<div className="ui-flex-center flex-1 w-full h-screen">
			<Loader className="animate-spin" size={18} />
		</div>
	)
}
