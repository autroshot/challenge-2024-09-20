import defaultBackgroundImageUrl from '@/assets/default-background.jpg';
import Description from '@/components/subscriptionSection/Description';
import EmailForm from '@/components/subscriptionSection/EmailForm';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function SubscriptionSection() {
    const [backgroundImageUrl, setBackgroundImageUrl] = useState(defaultBackgroundImageUrl);

    const LOCAL_STORAGE_KEY = 'background-image-url';
    useEffect(() => {
        const oldBackgroundImageUrl = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (oldBackgroundImageUrl !== null) {
            setBackgroundImageUrl(oldBackgroundImageUrl);

            return;
        }

        axios
            .get('https://api.unsplash.com/photos/random', {
                headers: { Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_CLIENT_ID}` },
            })
            .then((value) => {
                const newBackgroundImageUrl = value.data.urls.full;
                localStorage.setItem(LOCAL_STORAGE_KEY, newBackgroundImageUrl);

                setBackgroundImageUrl(newBackgroundImageUrl);

                return;
            });
    }, []);

    return (
        <section className="relative h-[740px]">
            <img
                src={backgroundImageUrl}
                alt=""
                className="absolute left-0 top-0 -z-20 block h-full w-full object-cover"
            />
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[#00000080]" />
            <div className="h-full w-full px-20 py-[9.5rem] text-center">
                <Description />
                <div className="mt-[5.938rem]">
                    <EmailForm />
                </div>
            </div>
        </section>
    );
}
