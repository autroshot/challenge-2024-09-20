import type { Landmark } from '@/components/landmarkSection';

export default function Card({ country, name, year, imageUrl, description }: Props) {
    return (
        <div className="min-w-[25rem] max-w-[25rem] rounded-[0.625rem] bg-[#d9d9d980] px-5 pb-[1.438rem] pt-[0.938rem]">
            <div className="flex justify-between px-[0.125rem]">
                <h2 className="font-montserrat text-base font-bold tracking-[-0.015rem]">{`${country}, ${name}`}</h2>
                <div className="font-montserrat text-base tracking-[-0.015rem]">{year}</div>
            </div>
            <img src={imageUrl} alt={name} className="mt-[0.563rem] w-max" />
            <p className="mt-[1.244rem] line-clamp-6 text-ellipsis px-[0.125rem] font-montserrat text-sm leading-5 tracking-[-0.013rem]">
                {description}
            </p>
        </div>
    );
}

type Props = Omit<Landmark, 'region'>;
