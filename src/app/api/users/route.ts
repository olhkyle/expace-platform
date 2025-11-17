import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongoose'
import User from '@/models/user'

interface MongoError extends Error {
	code?: number
	keyPattern?: Record<string, unknown>
	keyValue?: Record<string, unknown>
}

export async function GET() {
	try {
		await connectDB()
		const users = await User.find()

		return NextResponse.json(users, { status: 200 })
	} catch (e) {
		console.log(e)
		return NextResponse.json({ error: 'Failed to get users' }, { status: 500 })
	}
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
		const { name, email, course } = body

		await connectDB()

		const newUser = await User.create({ name, email, course })

		return NextResponse.json(newUser, { status: 201 })
	} catch (e: unknown) {
		const err = e as MongoError

		if (err.code === 11000 && err.keyPattern?.email) {
			// 이메일 중복
			return NextResponse.json(
				{ error: '이미 등록된 이메일입니다.' },
				{ status: 400 },
			)
		}

		return NextResponse.json(
			{ error: 'Failed to create user' },
			{ status: 500 },
		)
	}
}
