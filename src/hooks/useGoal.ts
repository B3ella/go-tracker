import { FormEvent, useState } from 'react';
import { api } from '../utils/api';

export default function useGoal(creatorEmail: string) {
    const defaultGoal = {
        tittle: '',
        description: '',
        link: '',
        creatorEmail: creatorEmail,
    };
    const [goal, setGoal] = useState(defaultGoal);

    const postGoal = api.goalsCrud.createGoal.useMutation({
        onSuccess: () => api.useContext().invalidate(),
    }).mutate;

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        postGoal(goal);
        setGoal(defaultGoal);
    };

    const onChange = (inputType: string, input: string) => {
        setGoal({ ...goal, [inputType]: input });
    };

    return { goal, onSubmit, onChange };
}
