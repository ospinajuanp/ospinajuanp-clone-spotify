import { FaAngleLeft,FaArrowDown,FaRegBell  } from "react-icons/fa";
import Card from './../components/Card'
import './Explorer.css'
import { useState } from "react";
import Artist from "../components/Artist";

function Explorer({state=null}) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

return (
    <div className='Explorer'>
        <div className="Explorer__navegation">
            <div className="Explorer__navegation-left">
                <div className="pointer"><FaAngleLeft/></div>
            </div>

            <div className="Explorer__navegation-right">
                <div className="Explorer__navegation-right-premium pointer scale1">
                    Explorar Premium
                </div>
                <div className="Explorer__navegation-right-install pointer scale1">
                    <div className="Explorer__navegation-right-install-icon">
                        <FaArrowDown/>
                    </div>
                    <div >
                        Instalar aplicacion
                    </div>
                </div>
                <div className="Explorer__navegation-right-notifications pointer scale1">
                    <FaRegBell/>
                </div>
                <div className="Explorer__navegation-right-profile pointer scale1">
                    Profile
                </div>
            </div>
        </div>

        <div className={`Explorer__content-explorar ${isHovered ? 'hoverScroll' : ''}`} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >

            <div className={state ? "Explorer__content" :"Explorer__contentMini"}>
                <div className={state ? "Explorer__content-title" :"Explorer__contentMini-title"}>
                    <div>
                        Hecho para ti
                    </div>
                    <div>
                        Mostrar Todo
                    </div>
                </div>
                <div className={state ? "Explorer__content-cards" :"Explorer__contentMini-cards"}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>

            <div className={state ? "Explorer__content" :"Explorer__contentMini"}>
                <div className={state ? "Explorer__content-title" :"Explorer__contentMini-title"}>
                    <div>
                        Estaciones populares
                    </div>
                    <div>
                        Mostrar Todo
                    </div>
                </div>
                <div className={state ? "Explorer__content-cards" :"Explorer__contentMini-cards"}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>

            <div className={state ? "Explorer__content" :"Explorer__contentMini"}>
                <div className={state ? "Explorer__content-title" :"Explorer__contentMini-title"}>
                    <div>
                        Escuchado recientemente
                    </div>
                    <div>
                        Mostrar Todo
                    </div>
                </div>
                <div className={state ? "Explorer__content-cards" :"Explorer__contentMini-cards"}>
                    <Artist/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>

            <div className={state ? "Explorer__content" :"Explorer__contentMini"}>
                <div className={state ? "Explorer__content-title" :"Explorer__contentMini-title"}>
                    <div>
                        Artistas populares
                    </div>
                    <div>
                        Mostrar Todo
                    </div>
                </div>
                <div className={state ? "Explorer__content-cards" :"Explorer__contentMini-cards"}>
                    <Artist/>
                    <Artist/>
                    <Artist/>
                    <Artist/>
                    <Artist/>
                    <Artist/>
                    <Artist/>
                    <Artist/>
                    <Artist/>
                </div>
            </div>

            <div className={state ? "Explorer__content" :"Explorer__contentMini"}>
                <div className={state ? "Explorer__content-title" :"Explorer__contentMini-title"}>
                    <div>
                        Nuevo lanzamiento para ti
                    </div>
                    <div>
                        Mostrar Todo
                    </div>
                </div>
                <div className={state ? "Explorer__content-cards" :"Explorer__contentMini-cards"}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>

            <div className={state ? "Explorer__content" :"Explorer__contentMini"}>
                <div className={state ? "Explorer__content-title" :"Explorer__contentMini-title"}>
                    <div>
                        Albumes populares
                    </div>
                    <div>
                        Mostrar Todo
                    </div>
                </div>
                <div className={state ? "Explorer__content-cards" :"Explorer__contentMini-cards"}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>

            <div className={state ? "Explorer__content" :"Explorer__contentMini"}>
                <div className={state ? "Explorer__content-title" :"Explorer__contentMini-title"}>
                    <div>
                        En tendencia
                    </div>
                    <div>
                        Mostrar Todo
                    </div>
                </div>
                <div className={state ? "Explorer__content-cards" :"Explorer__contentMini-cards"}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>

            <div className={state ? "Explorer__content" :"Explorer__contentMini"}>
                <div className={state ? "Explorer__content-title" :"Explorer__contentMini-title"}>
                    <div>
                        Descubre las selecciones para ti
                    </div>
                    <div>
                        Mostrar Todo
                    </div>
                </div>
                <div className={state ? "Explorer__content-cards" :"Explorer__contentMini-cards"}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>


        </div>
    </div>
    )
}

export default Explorer