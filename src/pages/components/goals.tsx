import { api } from "../../utils/api";
import GoalComponent from "./goalComponent";

function Goals(props: { creatorEmail: string }) {
    let query = api.goalsCrud.getUserGoals.useQuery("goliveirapk@gmail.com")
    if (query.isError) return <>{`error: ${query.error}`}</>

    let goals = query.data
    if (goals == undefined) { return <></> }

    const listItems = goals.map(goal =>
        <GoalComponent goal={goal} />
    )

    return <>{listItems}</>
}


export default Goals