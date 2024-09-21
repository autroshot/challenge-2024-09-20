export default function Title({ children }: Props) {
    return <h1 className="font-exo-2 text-5xl leading-[4.5rem] tracking-[-0.045rem]">{children}</h1>;
}

interface Props {
    children: React.ReactNode;
}
