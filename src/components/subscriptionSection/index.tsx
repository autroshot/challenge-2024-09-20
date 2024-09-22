import bgUrl from '@/assets/default-background.jpg';

export default function SubscriptionSection() {
    return (
        <section className="relative h-[740px]">
            <img src={bgUrl} alt="" className="absolute left-0 top-0 -z-20 block h-full w-full object-cover" />
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[#00000080]" />
            <div className="h-full w-full px-20 py-[9.5rem] text-center">
                <div>
                    <h1 className="font-montserrat text-2xl font-bold leading-9 tracking-[-0.023rem] text-white">
                        Sed ut perspiciatis unde omnis
                    </h1>
                    <p className="mt-[1.438rem] font-montserrat text-lg leading-[1.875rem] tracking-[-0.017rem] text-[#ffffffcc]">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                        anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                        Internet tend to repeat predefined chunks as necessary.
                    </p>
                    <div className="mt-8 h-px bg-[#ffffff80]" />
                    <p className="mt-8 min-h-[2.688rem] font-montserrat text-sm leading-[1.375rem] tracking-[-0.013rem] text-[#ffffff99]">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                    </p>
                </div>
                <div className="mt-[5.938rem] text-white">이메일 입력</div>
            </div>
        </section>
    );
}
