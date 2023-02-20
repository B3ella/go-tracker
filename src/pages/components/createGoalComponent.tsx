import { useState } from "react";
import { api } from "../../utils/api";

const CreateGoal = (props: { creatorEmail: string | null | undefined }) => {
    let [tittle, setTittle] = useState('')
    let [description, setDescription] = useState('')
    let [link, setLink] = useState('')
    let mutation = api.goalsCrud.createGoal.useMutation()
    async function handleSubmit() {
        if (props.creatorEmail) {
            let goal = {
                tittle,
                description,
                link,
                creatorEmail: props.creatorEmail
            }
            mutation.mutate(goal)
        } else {
            throw new Error('Não passou os dados certos')
        }
    }


    return (<>
        <form onSubmit={e => { e.preventDefault(); handleSubmit() }}>
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
            <button onSubmit={e => e.preventDefault()} type="submit">Submit</button>
        </form>
    </>)
}
export default CreateGoal