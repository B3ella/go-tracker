import { useState } from "react";
import { api } from "../../utils/api";

const CreateGoal = (props: { creatorEmail: string | null | undefined }) => {
    let [tittle, setTittle] = useState('')
    let [description, setDescription] = useState('')
    let [link, setLink] = useState('')

    async function handleSubmit() {
        if (props.creatorEmail !== undefined && props.creatorEmail !== null) {
            let goal = {
                tittle,
                description,
                link,
                creatorEmail: props.creatorEmail
            }
            api.goalsCrud.createGoal.useMutation().mutate(goal)
        }
    }


    return (<>
        <form method="post">
            <label htmlFor="tittle">tittle:</label>
            <input
                type="text"
                value={tittle}
                onChange={e => { setTittle(e.currentTarget.value) }}
                id="tittle"
                name="tittle" />
            <label htmlFor="description">description:</label>
            <input
                type="text"
                value={description}
                onChange={e => { setDescription(e.currentTarget.value) }}
                id="description"
                name="description" />
            <label htmlFor="link">link:</label>
            <input
                type="text"
                value={link}
                onChange={e => { setLink(e.currentTarget.value) }}
                id="link"
                name="link" />
            <button onSubmit={handleSubmit} type="submit">Submit</button>
        </form>
    </>)
}
export default CreateGoal