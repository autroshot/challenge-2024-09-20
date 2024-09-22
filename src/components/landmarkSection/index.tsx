import fallingwaterImageUrl from '@/assets/fallingwater.webp';
import picaImageUrl from '@/assets/pica.webp';
import sagradaFamiliaImageUrl from '@/assets/sagrada-familia.webp';
import saintBasilsCathedralImageUrl from '@/assets/saint-basils-cathedral.webp';
import CardList from '@/components/landmarkSection/CardList';
import Title from '@/components/Title';

export default function LandmarkSection() {
    const DUMMY_LANDMARKS: Array<Landmark> = [
        {
            country: 'Italy',
            name: 'Pica',
            year: 1173,
            imageUrl: picaImageUrl,
            description: `The Leaning Tower of Pisa, or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in the Pisa's Cathedral Square (Piazza del Duomo), which includes the cathedral and Pisa Baptistry.`,
        },
        {
            country: 'Spain',
            name: 'Sagrada Família',
            year: 1882,
            imageUrl: sagradaFamiliaImageUrl,
            description: `The Basílica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Família, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. Designed by Catalan architect Antoni Gaudí (1852-1926), in 2005 his work on Sagrada Família was added to an existing (1984) UNESCO World Heritage Site, "Works of Antoni Gaudí". On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica.`,
        },
        {
            country: 'US',
            name: 'Fallingwater',
            year: 1935,
            imageUrl: fallingwaterImageUrl,
            description: `Fallingwater is a house designed by the architect Frank Lloyd Wright in 1935. Situated in the Mill Run section of Stewart township, in the Laurel Highlands of southwest Pennsylvania, about 70 miles (110 km) southeast of Pittsburgh in the United States, it is built partly over a waterfall on the Bear Run river. The house was designed to serve as a weekend retreat for Liliane and Edgar J. Kaufmann, the owner of Pittsburgh's Kaufmann's Department Store.`,
        },
        {
            country: 'Russia',
            name: `Saint Basil's Cathedral`,
            year: 1173,
            imageUrl: saintBasilsCathedralImageUrl,
            description: `The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.`,
        },
    ];

    return (
        <section className="px-20 pb-20 pt-[7.5rem]">
            <Title>Duis tincidunt ut ligula vitae mollis.</Title>
            <div className="mt-[3.75rem]">필터</div>
            <CardList landmarks={DUMMY_LANDMARKS} />
        </section>
    );
}

export interface Landmark {
    country: string;
    name: string;
    year: number;
    imageUrl: string;
    description: string;
}
