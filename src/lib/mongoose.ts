import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
	throw new Error('❌ MONGODB_URI is not defined in .env.local')
}

// // 캐시 객체를 이용해 핫 리로드 시 중복 연결 방지
// let cached = (global as any).mongoose

// if (!cached) {
// 	cached = (global as any).mongoose = { conn: null, promise: null }
// }

// export async function connectDB() {
// 	if (mongoose.connection.readyState === 1) {
// 		return
// 	}

// 	if (cached.conn) return cached.conn

// 	if (!cached.promise) {
// 		cached.promise = mongoose
// 			.connect(MONGODB_URI)
// 			.then(mongoose => {
// 				console.log('몽고디비와의 연결상태:', mongoose.connection.readyState)
// 				console.log('✅ MongoDB connected')
// 				return mongoose
// 			})
// 			.catch(error => {
// 				console.log(error)
// 			})
// 	}

// 	cached.conn = await cached.promise
// 	return cached.conn
// }

export const connectDB = async () => {
	try {
		if (mongoose.connection.readyState !== 0) {
			console.log('Already Connected to DB')
			return
		}

		await mongoose.connect(process.env.MONGODB_URI || '', {
			dbName: process.env.MONGODB_DB_NAME,
		})
		console.log('Connected to DB')
	} catch (error) {
		console.log('Error happened to connect DB', error)
		throw new Error(String(error))
	}
}
