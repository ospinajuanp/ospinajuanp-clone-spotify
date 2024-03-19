import { FaAngleLeft,FaAngleRight,FaArrowDown,FaRegBell  } from "react-icons/fa";
import Card from './../components/Card'
import './Explorer.css'

function Explorer() {

return (
    <div className='Explorer'>
        <div className="Explorer__navegation">
            <div className="Explorer__navegation-left">
                <div className="pointer"><FaAngleLeft/></div>
                <div className="pointer"><FaAngleRight/></div>
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

        <div className="Explorer__content-explorar">
            <div className="Explorer__content">
                <div className="Explorer__content-title">
                    <div>
                        Hecho para ti
                    </div>
                    <div>
                        Mostrar Todo
                    </div>
                </div>
                <div className="Explorer__content-cards">
                <Card/>
                <Card/>
                <Card/>
                </div>
            </div>
            
            <div className="Explorer__content">
                <div className="Explorer__content-title">
                    <div>
                        Estaciones populares
                    </div>
                    <div>
                        Mostrar Todo
                    </div>
                </div>
                <div className="Explorer__content-cards">
                <Card/>
                <Card/>
                <Card/>
                </div>
            </div>

            <div className="Explorer__content">
                <div className="Explorer__content-title">
                    <div>
                        Escuchado Recientemente
                    </div>
                    <div>
                        Mostrar Todo
                    </div>
                </div>
                <div className="Explorer__content-cards">
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