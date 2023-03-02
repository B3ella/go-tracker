export default function GoalComponent(props: {
  goal: { link: string; tittle: string; description: string };
}) {
  const { link, tittle, description } = props.goal;

  return (
    <a
      href={link}
      className="my-3 flex w-64 flex-col justify-center rounded-md bg-white/10 px-10 py-3 text-center font-semibold text-white no-underline transition hover:bg-white/20"
    >
      <h1 className="text-xl font-bold text-slate-200">{tittle}</h1>
      <p className="text-sm text-slate-300">{description}</p>
    </a>
  );
}
