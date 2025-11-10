import mongoose, { InferSchemaType, Schema, Types, models } from 'mongoose'

const UserSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		course: { type: String, required: true },
	},
	{ timestamps: true, collection: 'users' },
)

export type UserType = InferSchemaType<typeof UserSchema> & {
	_id: Types.ObjectId
}

const User = models.User || mongoose.model('User', UserSchema)
export default User
