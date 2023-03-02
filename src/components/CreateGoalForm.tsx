import { FormEvent } from 'react';
import { goalPropretys, goalType } from '../types/GoalTypes';
import FormNode from './FormNode';

interface IProps {
    goal: goalType;
    handleChange: (arg0: string, arg1: goalPropretys) => void;
    handleSubmit: (event: FormEvent) => void;
}

export default function CreateGoalForm({ goal, handleChange, handleSubmit }: IProps) {
    return (
        <form className="flex flex-col text-white" onSubmit={handleSubmit}>
            <FormNode name="tittle" value={goal.tittle} onChange={handleChange} />
            <FormNode name="description" value={goal.description} onChange={handleChange} />
            <FormNode name="link" value={goal.link} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}
