import { api } from "../utils/api";
import GoalComponent from "./goalComponent";

export default function Goals({ creatorEmail }: { creatorEmail: string }) {
    const query = api.goalsCrud.getUserGoals.useQuery(creatorEmail)
    const goalsData = query.data

    const goals = goalsData?.map(goal => <GoalComponent key={goal.id} goal={goal} />)

    return <div className="flex flex-col justify-between">{goals}</div>
}