import useGoal from '../hooks/useGoal';
import FormNode from './FormNode';

const CreateGoal = ({ creatorEmail }: { creatorEmail: string }) => {
    const goal = useGoal(creatorEmail);

    return (
        <form className="flex flex-col text-white" onSubmit={goal.post}>
            <FormNode propretyName="tittle" goal={goal} />
            <FormNode propretyName="description" goal={goal} />
            <FormNode propretyName="link" goal={goal} />
            <button type="submit">Submit</button>
        </form>
    );
};
export default CreateGoal;
