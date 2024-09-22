export default function RoundedButton({ text, active, handleClick }: Props) {
    return (
        <button
            className={`h-10 w-10 rounded-full font-exo-2 text-sm tracking-[-0.013rem] ${active ? 'bg-black text-white' : 'bg-transparent text-black'}`}
            onClick={handleClick}
        >
            {text}
        </button>
    );
}

interface Props {
    text: string;
    active: boolean;
    handleClick: () => void;
}
