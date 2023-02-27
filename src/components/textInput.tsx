import { Dispatch, SetStateAction } from "react"


interface InputProps {
    name: string
    value: string,
    onChange: Dispatch<SetStateAction<string>>
}

export default function TextInput({ value, onChange, name }: InputProps) {
    return (
        <input
            type="text"
            value={value}
            onChange={e => { onChange(e.currentTarget.value) }}
            id="tittle"
            className="bg-opacity-5 border-transparent drop-shadow-md bg-slate-50 shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            name={name} />
    )
}