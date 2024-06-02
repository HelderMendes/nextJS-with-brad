import { model, Schema, models } from 'mongoose';

const UserSchema = new Schema(
    {
        email: {
            type: String,
            unique: [true, 'Email already exists'],
            required: [true, 'Email is Required'],
        },
        username: {
            type: String,
            required: [true, 'Username is Required'],
        },
        image: {
            type: String,
        },
        bookmarks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Property', // Reference to the Property Collection that the ObjectId is coming from
            },
        ],
    },
    {
        timestamps: true,
    }
);

const User = models.User || model('User', UserSchema);

export default User;
