import { api } from "../../utils/api";
import GoalComponent from "./goalComponent";

function Goals(props: { creatorEmail: string }) {
    const data = api.goalsCrud.getUserGoals.useQuery(props.creatorEmail).data

    const Goals = data?.map(goal => {
        return <GoalComponent key={goal.id} goal={goal} />
    })
    return Goals
}


export default Goals