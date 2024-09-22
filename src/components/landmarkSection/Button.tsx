export default function Button({ text, active, handleClick }: Props) {
    return (
        <button
            className={`rounded-[25px] px-5 py-2 font-exo-2 text-base tracking-[-0.015rem] ${active ? 'bg-black text-white' : 'bg-transparent text-black'}`}
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
