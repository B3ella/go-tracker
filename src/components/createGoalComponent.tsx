import { useState } from "react";
import { api } from "../utils/api";

const CreateGoal = (props: { creatorEmail: string | null | undefined }) => {
    const [tittle, setTittle] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const mutation = api.goalsCrud.createGoal.useMutation()
    function handleSubmit() {
        if (props.creatorEmail) {
            const goal = {
                tittle,
                description,
                link,
                creatorEmail: props.creatorEmail
            }
            mutation.mutate(goal)
        }
    }


    return (<>
        <form className="flex flex-col text-white" onSubmit={e => { e.preventDefault(); handleSubmit() }}>
            <label htmlFor="tittle" className="">tittle:</label>
            <input
                type="text"
                value={tittle}
                onChange={e => { setTittle(e.currentTarget.value) }}
                id="tittle"
                className="bg-opacity-5 border-transparent drop-shadow-md bg-slate-50 shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                name="tittle" />
            <label htmlFor="description">description:</label>
            <input
                type="text"
                value={description}
                onChange={e => { setDescription(e.currentTarget.value) }}
                id="description"
                className="bg-opacity-5 border-transparent drop-shadow-md bg-slate-50 shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                name="description" />
            <label htmlFor="link">link:</label>
            <input
                type="text"
                value={link}
                onChange={e => { setLink(e.currentTarget.value) }}
                id="link"
                className="bg-opacity-5 border-transparent drop-shadow-md bg-slate-50 shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                name="link" />
            <button onSubmit={e => e.preventDefault()} type="submit">Submit</button>
        </form>
    </>)
}
export default CreateGoal