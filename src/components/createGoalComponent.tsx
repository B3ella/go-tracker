import { FormEvent, useState } from "react";
import { api } from "../utils/api";
import CreateGoalForm from "./CreateGoalForm";
import { goalPropretys } from "./componentTypes";

const CreateGoal = ({ creatorEmail }: { creatorEmail: string }) => {
  const defaultGoal = {
    tittle: "",
    description: "",
    link: "",
    creatorEmail: creatorEmail,
  };
  const [goal, setGoal] = useState(defaultGoal);

  const mutation = api.goalsCrud.createGoal.useMutation({
    onSuccess() {
      api.useContext().invalidate();
    },
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    mutation.mutate(goal);
    setGoal(defaultGoal);
  }

  function handleChange(input: string, inputType: goalPropretys) {
    setGoal({ ...goal, [inputType]: input });
  }

  return (
    <CreateGoalForm
      goal={goal}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
export default CreateGoal;
