import fallingwaterImageUrl from '@/assets/fallingwater.webp';
import picaImageUrl from '@/assets/pica.webp';
import sagradaFamiliaImageUrl from '@/assets/sagrada-familia.webp';
import saintBasilsCathedralImageUrl from '@/assets/saint-basils-cathedral.webp';
import Button from '@/components/landmarkSection/Button';
import CardList from '@/components/landmarkSection/CardList';
import RoundedButton from '@/components/landmarkSection/RoundedButton';
import Title from '@/components/Title';
import { useState } from 'react';

export default function LandmarkSection() {
    const [regionValue, setRegionValue] = useState<RegionValue>('All');
    const [yearRange, setYearRange] = useState([1000, 1300]);

    const DUMMY_LANDMARKS: Array<Landmark> = [
        {
            country: 'Italy',
            name: 'Pica',
            year: 1173,
            imageUrl: picaImageUrl,
            description: `The Leaning Tower of Pisa, or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in the Pisa's Cathedral Square (Piazza del Duomo), which includes the cathedral and Pisa Baptistry.`,
            region: 'Europe',
        },
        {
            country: 'Spain',
            name: 'Sagrada Família',
            year: 1882,
            imageUrl: sagradaFamiliaImageUrl,
            description: `The Basílica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Família, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. Designed by Catalan architect Antoni Gaudí (1852-1926), in 2005 his work on Sagrada Família was added to an existing (1984) UNESCO World Heritage Site, "Works of Antoni Gaudí". On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica.`,
            region: 'Europe',
        },
        {
            country: 'US',
            name: 'Fallingwater',
            year: 1935,
            imageUrl: fallingwaterImageUrl,
            description: `Fallingwater is a house designed by the architect Frank Lloyd Wright in 1935. Situated in the Mill Run section of Stewart township, in the Laurel Highlands of southwest Pennsylvania, about 70 miles (110 km) southeast of Pittsburgh in the United States, it is built partly over a waterfall on the Bear Run river. The house was designed to serve as a weekend retreat for Liliane and Edgar J. Kaufmann, the owner of Pittsburgh's Kaufmann's Department Store.`,
            region: 'America',
        },
        {
            country: 'Russia',
            name: `Saint Basil's Cathedral`,
            year: 1173,
            imageUrl: saintBasilsCathedralImageUrl,
            description: `The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.`,
            region: 'Europe',
        },
    ];
    const regionValues: Array<RegionValue> = ['All', 'Asia', 'Europe', 'America', 'Oceania'];

    const filteredLandmarks1: Array<Landmark> = [];
    if (regionValue === 'All') {
        DUMMY_LANDMARKS.forEach((landmark) => filteredLandmarks1.push(landmark));
    } else {
        DUMMY_LANDMARKS.forEach((landmark) => {
            if (landmark.region === regionValue) {
                filteredLandmarks1.push(landmark);
            }
        });
    }

    const filteredLandmarks2: Array<Landmark> = [];
    const isSelection = yearRange.length === 1;
    if (!isSelection) {
        filteredLandmarks1.forEach((landmark) => {
            if (landmark.year >= yearRange[0] && landmark.year <= yearRange[1]) {
                filteredLandmarks2.push(landmark);
            }
        });
    }

    return (
        <section className="px-20 pb-20 pt-[7.5rem]">
            <Title>Duis tincidunt ut ligula vitae mollis.</Title>
            <div className="mt-[3.75rem] flex flex-row gap-5">
                <div className="flex flex-row gap-[5px] rounded-[25px] border border-solid border-[#00000080] p-[5px]">
                    {regionValues.map((currentRegionValue) => (
                        <Button
                            key={currentRegionValue}
                            text={currentRegionValue}
                            active={currentRegionValue === regionValue}
                            handleClick={() => setRegionValue(currentRegionValue)}
                        />
                    ))}
                </div>
                <div className="relative flex flex-row items-center gap-[4.75rem] rounded-[25px] border border-solid border-[#00000080] p-[5px]">
                    <RoundedButton
                        number={1000}
                        active={
                            (yearRange.length === 1 && yearRange[0] === 1000) ||
                            (1000 >= yearRange[0] && 1000 <= yearRange[1])
                        }
                        handleClick={() => {
                            const newYearRange = [...yearRange];

                            if (newYearRange.length === 1 && newYearRange[0] === 1000) return;
                            if (newYearRange.length === 2) {
                                newYearRange.length = 0;
                                newYearRange.push(1000);

                                setYearRange(newYearRange);

                                return;
                            }
                            newYearRange.unshift(1000);

                            setYearRange(newYearRange);

                            return;
                        }}
                    />
                    <div
                        className={`absolute left-3 -z-10 h-[10px] w-[116.66px] ${yearRange.length === 2 && yearRange[0] === 1000 ? 'bg-black' : 'bg-[#999999]'}`}
                    />
                    <RoundedButton
                        number={1300}
                        active={
                            (yearRange.length === 1 && yearRange[0] === 1300) ||
                            (1300 >= yearRange[0] && 1300 <= yearRange[1])
                        }
                        handleClick={() => {
                            const newYearRange = [...yearRange];

                            if (newYearRange.length === 1 && newYearRange[0] === 1300) return;
                            if (newYearRange.length === 2) {
                                newYearRange.length = 0;
                                newYearRange.push(1300);

                                setYearRange(newYearRange);

                                return;
                            }
                            if (newYearRange[0] < 1300) {
                                newYearRange.push(1300);

                                setYearRange(newYearRange);

                                return;
                            }
                            newYearRange.unshift(1300);

                            setYearRange(newYearRange);

                            return;
                        }}
                    />
                    <div
                        className={`absolute left-[141px] -z-10 h-[10px] w-[116.66px] ${yearRange.length === 2 && yearRange[0] <= 1300 && yearRange[1] >= 1700 ? 'bg-black' : 'bg-[#999999]'}`}
                    />
                    <RoundedButton
                        number={1700}
                        active={
                            (yearRange.length === 1 && yearRange[0] === 1700) ||
                            (1700 >= yearRange[0] && 1700 <= yearRange[1])
                        }
                        handleClick={() => {
                            const newYearRange = [...yearRange];

                            if (newYearRange.length === 1 && newYearRange[0] === 1700) return;
                            if (newYearRange.length === 2) {
                                newYearRange.length = 0;
                                newYearRange.push(1700);

                                setYearRange(newYearRange);

                                return;
                            }
                            if (newYearRange[0] < 1700) {
                                newYearRange.push(1700);

                                setYearRange(newYearRange);

                                return;
                            }
                            newYearRange.unshift(1700);

                            setYearRange(newYearRange);

                            return;
                        }}
                    />
                    <div
                        className={`absolute left-[257px] -z-10 h-[10px] w-[116.66px] ${yearRange.length === 2 && yearRange[1] === 2000 ? 'bg-black' : 'bg-[#999999]'}`}
                    />
                    <RoundedButton
                        number={2000}
                        active={
                            (yearRange.length === 1 && yearRange[0] === 2000) ||
                            (2000 >= yearRange[0] && 2000 <= yearRange[1])
                        }
                        handleClick={() => {
                            const newYearRange = [...yearRange];

                            if (newYearRange.length === 1 && newYearRange[0] === 2000) return;
                            if (newYearRange.length === 2) {
                                newYearRange.length = 0;
                                newYearRange.push(2000);

                                setYearRange(newYearRange);

                                return;
                            }
                            if (newYearRange[0] < 2000) {
                                newYearRange.push(2000);

                                setYearRange(newYearRange);

                                return;
                            }
                            newYearRange.unshift(2000);

                            setYearRange(newYearRange);

                            return;
                        }}
                    />
                </div>
            </div>
            <div className="mt-[4.25rem] flex flex-row gap-5">
                <CardList landmarks={filteredLandmarks2} isSelecting={isSelection} />
            </div>
        </section>
    );
}

export interface Landmark {
    country: string;
    name: string;
    year: number;
    imageUrl: string;
    description: string;
    region: Region;
}

type Region = 'Asia' | 'Europe' | 'America' | 'Oceania';
type RegionValue = Region | 'All';
