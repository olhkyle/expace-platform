import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongoose'
import User from '@/models/user'

interface Params {
	params: Promise<{
		id: string
	}>
}

export async function DELETE(request: NextRequest, { params }: Params) {
	try {
		console.log(request.body)
		await connectDB()

		const { id } = await params

		const deletedUser = await User.findByIdAndDelete(id)

		if (!deletedUser) {
			return NextResponse.json(
				{ error: '존재하지 않는 사용자입니다.' },
				{ status: 404 },
			)
		}

		return NextResponse.json(
			{ message: '사용자가 삭제되었습니다.', data: deletedUser },
			{ status: 200 },
		)
	} catch (e) {
		console.log(e)
		return NextResponse.json(
			{ error: 'Failed to delete user' },
			{ status: 500 },
		)
	}
}
