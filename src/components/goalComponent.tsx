import { api } from '../utils/api';
import Image from 'next/image';

interface IProps {
    link: string;
    tittle: string;
    description: string;
    id: string;
}

export default function GoalComponent({ link, tittle, description, id }: IProps) {
    const mutation = api.goalsCrud.deleteGoal.useMutation({
        onSuccess: () => api.useContext().invalidate(),
        onMutate: () => api.useContext().invalidate(),
    }).mutate;
    function deleteGoal(id: string) {
        mutation(id);
    }

    return (
        <div className="flex ">
            <a
                href={link}
                className="my-3 flex w-64 flex-col justify-center rounded-md bg-white/10 px-10 py-3 text-center font-semibold text-white no-underline transition hover:bg-white/20"
            >
                <h1 className="text-xl font-bold text-slate-200">{tittle}</h1>
                <p className="text-sm text-slate-300">{description}</p>
            </a>
            <Image
                className="my-3 h-9 w-8"
                src="/trash.png"
                alt="delete"
                role="button"
                tabIndex={0}
                onClick={(e) => {
                    e.preventDefault();
                    deleteGoal(id);
                }}
                onKeyDown={(e) => {
                    if (e.key == 'Enter') deleteGoal(id);
                }}
            />
        </div>
    );
}
