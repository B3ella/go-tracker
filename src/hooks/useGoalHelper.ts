import { api } from '../utils/api';

export default function useGoalHelper() {
    const postGoal = api.goalsCrud.createGoal.useMutation({
        onSuccess: () => api.useContext().invalidate(),
    }).mutate;

    const createDefaultGoal = (creatorEmail: string) => {
        const tittle = '';
        const description = '';
        const link = '';
        return { tittle, description, link, creatorEmail };
    };
    return { postGoal, createDefaultGoal };
}