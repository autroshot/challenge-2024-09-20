export default function Title({ children }: Props) {
    return <h1>{children}</h1>;
}

interface Props {
    children: React.ReactNode;
}
