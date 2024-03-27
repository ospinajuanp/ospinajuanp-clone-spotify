import { MdOutlineHome,MdSearch  } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import './MiniMenu.css'
import { useState } from "react";

import Artist from "../../main-view/components/Artist";

function MiniMenu({changeState=null, state=null}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

return (
    <div className='MiniMenu'>
        <div className="MiniMenu__navegation">
            <ul className="MiniMenu__navegation-list">
                <li className="MiniMenu__navegation-home">
                    <MdOutlineHome/>
                </li>
                <li className="MiniMenu__navegation-search">
                    <MdSearch />
                </li>
            </ul>
        </div>


        <div className="MiniMenu__search">
            <div className="MiniMenu__search-search">
                <ImBooks onClick={changeState}/>
            </div>
            <div className={`MiniMenu__search-songs ${isHovered ? 'hoverScroll' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div>
                    <Artist text={!state && "HiddeText"}/>
                    <Artist text={!state && "HiddeText"}/>
                    <Artist text={!state && "HiddeText"}/>
                    <Artist text={!state && "HiddeText"}/>
                    <Artist text={!state && "HiddeText"}/>
                    <Artist text={!state && "HiddeText"}/>
                    <Artist text={!state && "HiddeText"}/>
                    <Artist text={!state && "HiddeText"}/>
                    <Artist text={!state && "HiddeText"}/>
                    <Artist text={!state && "HiddeText"}/>
                    <Artist text={!state && "HiddeText"}/>
                    <Artist text={!state && "HiddeText"}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MiniMenu