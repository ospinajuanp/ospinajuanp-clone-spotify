import { FaPlay } from "react-icons/fa";
import './Artist.css'

function Artist({text="Text"}) {

return (
    <div className='Artist'>
        <div className='Artist__image'>
            <img src="https://i.scdn.co/image/ab67616100005174eeb813477e7f419506595e95" alt="blessd"  />
            <div className={`Artist__play ${text}__play`}>
                <FaPlay />
            </div>
        </div>
        <div className={`Artist__text ${text}`}>
            <div className='Artist__text-title'>
                Blessd
            </div>
            <div className='Artist__text-artist'>
                Artista
            </div>
        </div>
    </div>
    )
}

export default Artist