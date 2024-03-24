import { FaPlay } from "react-icons/fa";
import './Card.css'

function Card() {

return (
    <div className='Card'>
        <div className='Card__image'>
            <img src="https://i.pinimg.com/736x/00/8a/a4/008aa48c412fecfffe26b8fb8ec662b4.jpg" alt="blessd"  />
            <div className="Card__play">
                <FaPlay />
            </div>
        </div>
        <div className='Card__text'>
            <div className='Card__text-title'>
                MixBlessd
            </div>
            <div className='Card__text-artist'>
                Blessd, Arcangel, Bad bunny.
            </div>
        </div>
    </div>
    )
}

export default Card