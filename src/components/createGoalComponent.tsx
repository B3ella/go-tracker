import useGoal from '../hooks/useGoal';
import FormNode from './FormNode';

const CreateGoal = ({ creatorEmail }: { creatorEmail: string }) => {
    const { goal, onChange, onSubmit } = useGoal(creatorEmail);

    return (
        <form className="flex flex-col text-white" onSubmit={onSubmit}>
            <FormNode name="tittle" value={goal.tittle} onChange={onChange} />
            <FormNode name="description" value={goal.description} onChange={onChange} />
            <FormNode name="link" value={goal.link} onChange={onChange} />
            <button type="submit">Submit</button>
        </form>
    );
};
export default CreateGoal;
