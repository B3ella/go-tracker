import { goalPropretys } from '../types/GoalTypes';

interface IFormSet {
    value: string;
    name: goalPropretys;
    onChange: (arg0: string, arg1: string) => void;
}

export default function FormNode({ value, name, onChange }: IFormSet) {
    return (
        <label>
            {name}:
            <br />
            <input
                type="text"
                value={value}
                id={'form-' + name}
                name={name}
                onChange={(e) => {
                    onChange(name, e.target.value);
                }}
                className="focus:shadow-outline appearance-none rounded border border-transparent bg-slate-50 bg-opacity-5 py-2 px-3 leading-tight shadow drop-shadow-md focus:outline-none"
            />
        </label>
    );
}
