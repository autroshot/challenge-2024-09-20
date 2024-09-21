import avatar1Url from '@/assets/avatar-1.webp';
import avatar2Url from '@/assets/avatar-2.webp';
import avatar3Url from '@/assets/avatar-3.webp';
import Card from '@/components/profileSection/Card';

export default function CardList() {
    const DUMMY_AVATARS: Array<Avatar> = [
        {
            imageSrc: avatar1Url,
            title: 'Sed ut perspiciatis',
            description:
                'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
        },
        {
            imageSrc: avatar2Url,
            title: 'Lorem ipsum dolor',
            description:
                'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.',
        },
        {
            imageSrc: avatar3Url,
            title: 'Nemo enim ipsam',
            description:
                'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.',
        },
    ];

    return (
        <div className="grid grid-cols-3 gap-x-5">
            {DUMMY_AVATARS.map((avatar) => (
                <Card
                    key={avatar.imageSrc}
                    imageSrc={avatar.imageSrc}
                    title={avatar.title}
                    description={avatar.description}
                />
            ))}
        </div>
    );
}

interface Avatar {
    imageSrc: string;
    title: string;
    description: string;
}
