import { MdOutlineHome,MdSearch  } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { useState } from "react";
import Artist from "../../main-view/components/Artist";
import './Menu.css'
function Menu({changeState=null, state=null}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
return (
    <div className='Menu'>
        <div className="Menu__navegation">
            <ul className="Menu__navegation-list">
                <li className="Menu__navegation-home">
                    <MdOutlineHome/> 
                    <div>
                        Inicio
                    </div>
                </li>
                <li className="Menu__navegation-search">
                    <MdSearch />
                    <div>
                        Buscar
                    </div>
                </li>
            </ul>
        </div>


        <div className="Menu__search">
            <div className="Menu__search-search">
                <ImBooks onClick={changeState}/>
                <div>Tu Biblioteca</div>
                <FaPlus/>
                <FaArrowRightLong/>
            </div>
            <div className={`Menu__search-songs ${isHovered ? 'hoverScroll' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div>
                    <Artist text={state && "LeftText"}/>
                    <Artist text={state && "LeftText"}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Menu