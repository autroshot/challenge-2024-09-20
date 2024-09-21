export default function Card({ imageSrc, title, description }: Props) {
    return (
        <div>
            <img src={imageSrc} alt="아바타" className="w-[6.75rem]" />
            <h2 className="mt-10 font-montserrat text-2xl font-bold leading-9 tracking-[-0.023rem]">{title}</h2>
            <p className="mt-6 font-montserrat text-lg leading-[1.875rem] tracking-[-0.017rem] text-[#000000cc]">
                {description}
            </p>
            <button className="mt-6 font-exo-2 text-lg font-bold leading-[1.875rem] tracking-[-0.017rem] text-[#18a0fb] hover:underline">
                LEARN MORE
            </button>
        </div>
    );
}

interface Props {
    imageSrc: string;
    title: string;
    description: string;
}
