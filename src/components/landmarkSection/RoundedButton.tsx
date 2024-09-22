export default function RoundedButton({ number, active, handleClick }: Props) {
    return (
        <button
            className={`h-10 w-10 rounded-full font-exo-2 text-sm tracking-[-0.013rem] text-white ${active ? 'bg-black' : 'bg-[#999999]'}`}
            onClick={handleClick}
        >
            {number}
        </button>
    );
}

interface Props {
    number: number;
    active: boolean;
    handleClick: () => void;
}
