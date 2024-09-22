import type { Landmark } from '@/components/landmarkSection';
import Card from '@/components/landmarkSection/Card';

export default function CardList({ landmarks }: Props) {
    return (
        <div className="grid grid-cols-3 gap-x-5">
            {landmarks.map((landmark) => (
                <Card
                    key={landmark.imageUrl}
                    country={landmark.country}
                    name={landmark.name}
                    year={landmark.year}
                    imageUrl={landmark.imageUrl}
                    description={landmark.description}
                />
            ))}
        </div>
    );
}

interface Props {
    landmarks: Array<Landmark>;
}
