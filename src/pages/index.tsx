import { type NextPage } from 'next';
import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/react';
import CreateGoal from '../components/createGoalComponent';
import Goals from '../components/goals';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>GO Tracker</title>
                <meta name="description" content="A tracker for your goals" />
            </Head>
            <main className="flex min-h-screen flex-col justify-center bg-gradient-to-br from-slate-700 via-cyan-700 to-lime-700 ">
                <AuthControler />
            </main>
        </>
    );
};

export default Home;

const AuthControler: React.FC = () => {
    const { data: sessionData } = useSession();
    function loggedOnly() {
        if (sessionData && sessionData.user.email !== null && sessionData.user.email !== undefined) {
            return (
                <div className="my-36 flex w-2/5 justify-around">
                    <div className="flex flex-col">
                        <Goals creatorEmail={sessionData.user.email} />
                    </div>
                    <CreateGoal creatorEmail={sessionData.user.email} />
                </div>
            );
        }
        return <></>;
    }

    return (
        <div className="min-h-screen">
            <div className="flex justify-evenly bg-slate-400/5 py-2">
                <button
                    className="rounded-full bg-white/0 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/10"
                    onClick={sessionData ? () => void signOut() : () => void signIn()}
                >
                    {sessionData ? 'Sign out' : 'Sign in'}
                </button>
                <p className="px-10 py-3 text-center font-semibold text-white">
                    {sessionData && <span>Logged in as {sessionData.user?.email}</span>}
                </p>
            </div>
            <div className="flex flex-col items-center justify-end gap-4">{loggedOnly()}</div>
        </div>
    );
};
