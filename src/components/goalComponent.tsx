function GoalComponent(props: { goal: { link: string, tittle: string, description: string } }) {

    const { link, tittle, description } = props.goal

    return (
        <a href={link} className="flex flex-col justify-center text-center rounded-md w-64 bg-white/10 px-10 py-3 my-3 font-semibold text-white no-underline transition hover:bg-white/20">
            <h1 className="font-bold text-xl text-slate-200">{tittle}</h1>
            <p className="text-sm text-slate-300">{description}</p>
        </a >
    )
}
export default GoalComponent