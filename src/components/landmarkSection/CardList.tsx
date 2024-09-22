import type { Landmark } from '@/components/landmarkSection';
import Card from '@/components/landmarkSection/Card';

export default function CardList({ landmarks }: Props) {
    return (
        <div className="flex min-h-[471.891px] flex-row items-center gap-x-10 overflow-x-auto pb-4">
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
            {landmarks.length === 0 ? <div className="w-[25rem] text-center font-exo-2">No results!</div> : null}
        </div>
    );
}

interface Props {
    landmarks: Array<Landmark>;
}
