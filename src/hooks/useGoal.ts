import { useDebugValue, useState } from 'react';
import type { FormEvent } from 'react';
import useGoalHelper from './useGoalHelper';

export default function useGoal(creatorEmail: string) {
    const { postGoal, createDefaultGoal } = useGoalHelper();

    const defaultGoal = createDefaultGoal(creatorEmail);

    const [goal, setGoal] = useState(defaultGoal);

    const onChange = (inputType: string, input: string) => {
        setGoal({ ...goal, [inputType]: input });
    };
    const post = (event: FormEvent) => {
        event.preventDefault();
        postGoal(goal);
        setGoal(defaultGoal);
    };

    useDebugValue({ ...goal, post, onChange });

    return { ...goal, post, onChange };
}
