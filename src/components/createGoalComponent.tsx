import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { api } from "../utils/api";
import FormSet from "./formSet";

const CreateGoal = (props: { creatorEmail: string | null | undefined }) => {

    const [tittle, setTittle] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')

    const mutation = api.goalsCrud.createGoal.useMutation()

    function cleanStates() {
        setDescription('')
        setLink('')
        setTittle('')
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (props.creatorEmail) {
            const goal = {
                tittle,
                description,
                link,
                creatorEmail: props.creatorEmail
            }
            cleanStates()

            mutation.mutate(goal)
        }
    }


    return (<>
        <form className="flex flex-col text-white" onSubmit={handleSubmit}>
            <FormSet name="Tittle" setValue={setTittle} value={tittle} />
            <FormSet name="Link" setValue={setLink} value={link} />
            <FormSet name="Description" setValue={setDescription} value={description} />

            <button onSubmit={e => e.preventDefault()} type="submit">Submit</button>
        </form>
    </>)
}
export default CreateGoal