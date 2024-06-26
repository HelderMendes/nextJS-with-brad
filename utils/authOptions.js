import GoogleProvider from 'next-auth/providers/google';
import connectDB from '@/config/database';
import User from '@/models/User';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                }, // I need this authorization object to enable testing (this way I'm prompted for a login function instead so that the system remembers which account is already registered and logs automatic as it should be on production)
            },
        }),
    ],
    callbacks: {
        // Invoked on successful sign in
        async signIn({ profile }) {
            // 1. connect to DB
            await connectDB();
            // 2. Check if user exists
            const userExists = await User.findOne({ email: profile.email });
            // 3. If Not, then Add User to DB
            if (!userExists) {
                // Truncate user name whenever is to long
                const username = profile.name.slice(0, 20);
                await User.create({
                    email: profile.email,
                    username,
                    image: profile.picture,
                });
            }
            // 4. Return true to allow sign in
            return true;
        },
        // Another callback: Modifies the session object
        async session({ session }) {
            // 1. Get user from DB
            const user = await User.findOne({ email: session.user.email });
            // 2. Assign User ID to the session
            session.user.id = user._id.toString();
            // 3. return session
            return session;
        },
    },
};
