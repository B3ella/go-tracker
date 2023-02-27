import { Dispatch, SetStateAction } from "react"
import TextInput from "./textInput"

interface IFormSet {
    value: string,
    name: string,
    setValue: Dispatch<SetStateAction<string>>
}

export default function FormSet({ value, name, setValue }: IFormSet) {
    return (
        <>
            <label htmlFor={name} className="">{name}:</label>
            <TextInput value={value} onChange={setValue} name={name} />
        </>
    )
}