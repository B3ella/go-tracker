import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import CreateGoal from "./components/createGoalComponent";
import Goals from "./components/goals";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GO Tracker</title>
        <meta name="description" content="A tracker for your goals" />
      </Head>
      <main className="bg-green-700 min-h-screen flex flex-col justify-center ">
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
        <>
          <Goals creatorEmail={sessionData.user.email} />
          <CreateGoal creatorEmail={sessionData.user.email} />
        </>
      )
    }
    return <></>
  }

  return (
    <div className="flex flex-col items-center justify-end gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.email}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
      {loggedOnly()}
    </div>
  );
};
