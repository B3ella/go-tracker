import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.JWT_SECRET,
    session: {
        strategy: 'jwt',
    },
    jwt: {
        maxAge: 24 * 60 * 60,
    },
});
