import { CORE_CONCEPTS } from '../data.js';
import CoreConcepts from './CoreConcepts.jsx';

export default function CoreConceptsComponent() {
    return (
        <section id='core-concepts'>
            <h2>Time to get started!</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (<CoreConcepts key={conceptItem.title} {...conceptItem} />))}
            </ul>
        </section>
    );
}