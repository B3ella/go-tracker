import { api } from "../../utils/api";
import GoalComponent from "./goalComponent";

function Goals(props: { creatorEmail: string }) {
    console.log(props.creatorEmail)
    let goals = api.goalsCrud.getUserGoals.useQuery(props.creatorEmail).data
    console.log(goals)
    if (goals !== undefined) {
        goals.map(goal => {
            console.log(goal)
            if (goal.link !== null && goal.isComplete == false) {
                return <GoalComponent tittle={goal.tittle} link={goal.link} description={goal.description} />
            }
        })
    }
    return <></>
}


export default Goals