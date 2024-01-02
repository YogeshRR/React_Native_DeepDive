
import imgSource from '../../assets/react-core-concepts.png';
import '../Header/Header.css';
const reactDescription = ['Fundamental', 'Cruical', 'Core'];


function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
    const randomNames = reactDescription[getRandomInt(2)];
    return (
        <header>
            <img src={imgSource} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {randomNames} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>

    );
}