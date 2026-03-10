// define props (aka input params this child component needs)
type StudioProps = {
    name: string;
    yearFounded: number;
}

export default function Studio({ name, yearFounded }: StudioProps) {
    return (
        <article className="card">
            <h2>{name}</h2>
            <p>Year Founded: {yearFounded}</p>
        </article>
    )
}