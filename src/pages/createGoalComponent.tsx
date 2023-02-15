import { api } from "../utils/api";
function submit() {
    const input = {
        link: 'a',
        tittle: 'tittle',
        description: 'desc',
        creatorEmail: 'email'
    }
    api.example.createGoal.useQuery(
        input
    )
}
const CreateGoal = () => {
    return (<>
        <form action="/api/form" method="post">
            <label htmlFor="first">First name:</label>
            <input type="text" id="first" name="first" />
            <label htmlFor="last">Last name:</label>
            <input type="text" id="last" name="last" />
            <button onSubmit={submit} type="submit">Submit</button>
        </form>
    </>)
}
export default CreateGoal