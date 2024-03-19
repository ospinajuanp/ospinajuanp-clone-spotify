import { MdOutlineHome,MdSearch  } from "react-icons/md";
import { ImBooks } from "react-icons/im";

import { GiMusicSpell } from "react-icons/gi";

import './MiniMenu.css'
import { useState } from "react";

function MiniMenu() {
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
                <ImBooks />
            </div>
            <div className={`MiniMenu__search-songs ${isHovered ? 'hoverScroll' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                    <GiMusicSpell/>
                </div>
            </div>
        </div>





    </div>
    )
}

export default MiniMenu