function GoalComponent(props: { link: string, tittle: string, description: string }) {

    const { link, tittle, description } = props

    return (
        <a href={link} className="flex flex-col justify-center text-white text-center">
            <h1>{tittle}</h1>
            <p>{description}</p>
        </a >
    )
}
export default GoalComponent