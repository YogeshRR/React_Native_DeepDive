export default function Section({ title, children, ...Props }) {
    return (
        <section {...Props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}