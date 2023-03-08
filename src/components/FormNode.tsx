interface IProps {
    propretyName: 'description' | 'tittle' | 'link';
    goal: {
        onChange: (arg: string, arg1: string) => void;
        tittle: string;
        description: string;
        link: string;
        creatorEmail: string;
    };
}

export default function FormNode({ propretyName, goal }: IProps) {
    const { onChange } = goal;
    return (
        <label>
            {propretyName}:
            <br />
            <input
                value={goal[propretyName]}
                onChange={(e) => onChange(propretyName, e.target.value)}
                className="focus:shadow-outline appearance-none rounded border border-transparent bg-slate-50 bg-opacity-5 py-2 px-3 leading-tight shadow drop-shadow-md focus:outline-none"
            />
        </label>
    );
}
