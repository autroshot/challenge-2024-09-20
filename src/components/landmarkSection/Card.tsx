import type { Landmark } from '@/components/landmarkSection';

export default function Card({ country, name, year, imageUrl, description }: Props) {
    return (
        <div>
            <div>
                <h2>{`${country}, ${name}`}</h2>
                <div>{year}</div>
            </div>
            <img src={imageUrl} alt={name} className="w-max" />
            <p>{description}</p>
        </div>
    );
}

type Props = Landmark;
