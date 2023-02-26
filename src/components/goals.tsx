import { api } from "../utils/api";
import GoalComponent from "./goalComponent";

function Goals(props: { creatorEmail: string }) {
    const data = api.goalsCrud.getUserGoals.useQuery(props.creatorEmail).data

    const Goals = data?.map(goal => {
        return <GoalComponent key={goal.id} goal={goal} />
    })
    return <div className="flex flex-col justify-between">{Goals}</div>
}


export default Goals