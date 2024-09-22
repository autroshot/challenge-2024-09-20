import bgUrl from '@/assets/default-background.jpg';
import Description from '@/components/subscriptionSection/Description';
import EmailForm from '@/components/subscriptionSection/EmailForm';

export default function SubscriptionSection() {
    return (
        <section className="relative h-[740px]">
            <img src={bgUrl} alt="" className="absolute left-0 top-0 -z-20 block h-full w-full object-cover" />
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
