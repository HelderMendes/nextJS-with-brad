import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/utils/authOptions';

export const getSessionUser = async () => {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user) {
            // return new Response({ msg: 'Unauthorized', status: 402 });
            return null;
        }
        return {
            user: session.user,
            userId: session.user.id,
        };
    } catch (error) {
        // console.error(`There was somting wrong ${error}`);
        console.error(error);
        return null;
    }
};
