export default function Card({ imageSrc, title, description }: Props) {
    return (
        <div>
            <img src={imageSrc} alt="아바타" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button>LEARN MORE</button>
        </div>
    );
}

interface Props {
    imageSrc: string;
    title: string;
    description: string;
}
