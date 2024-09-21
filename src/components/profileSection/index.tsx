import CardList from '@/components/profileSection/CardList';
import Title from '@/components/Title';

export default function ProfileSection() {
    return (
        <section className="px-20 pb-[6.875rem] pt-[7.5rem]">
            <Title>
                Snap photos and share like <br />
                never before
            </Title>
            <div className="pt-[4.375rem]">
                <CardList />
            </div>
        </section>
    );
}
