import { FaRegHeart,FaRandom,FaArrowAltCircleLeft,FaPlay,FaArrowAltCircleRight,FaRedoAlt,FaRegWindowRestore   } from "react-icons/fa";
import { PiMicrophoneStageBold } from "react-icons/pi";
import { TiThMenuOutline } from "react-icons/ti";
import { GiUltrasound } from "react-icons/gi";
import { AiFillSound } from "react-icons/ai";
import { SlSizeFullscreen } from "react-icons/sl";
import './Player.css'

function Player({changeState=null}) {

return (
    <div className='Player'>

        <div className='Player__song'>
            <div className='Player__song-info'>
                <div className='Player__song-info-image pointer' onClick={changeState}>
                    <img src="https://i.scdn.co/image/ab67616d0000485173456ed697350847810e52b3" alt=""/>
                </div>
                <div className='Player__song-info-text'>
                    <div>Normal</div>
                    <div>Feid</div>
                </div>
                <div className='Player__song-info-icon'>
                    <FaRegHeart />
                </div>
            </div>
        </div>

        <div className='Player__controls'>
            <div className="Player__controls-icons">
                <div className="Player__controls-icons-left">
                    <div><FaRandom/></div>
                    <div><FaArrowAltCircleLeft /></div>
                </div>
                <div className="Player__controls-icons-center">
                    <div>
                        <FaPlay />
                    </div>
                </div>
                <div className="Player__controls-icons-right">
                    <div><FaArrowAltCircleRight /></div>
                    <div><FaRedoAlt /></div>
                </div>
            </div>

            <div className="Player__controls-icons-timebar">
                <div className="Player__controls-icons-timebar-timer">
                    0:02
                </div>
                <div className="Player__controls-icons-timebar-progress">
                    ------------------------------------------------------
                </div>
                <div className="Player__controls-icons-timebar-duration">
                    2:51
                </div>
            </div>
        </div>

        <div className='Player__controls-additional'>
            <div className="Player__controls-additional-icons">
                <div>
                    <FaPlay/>
                </div>
                <div>
                    <PiMicrophoneStageBold/>
                </div>
                <div>
                    <TiThMenuOutline/>
                </div>
                <div>
                    <GiUltrasound/>
                </div>
                <div className="Player__controls-additional-icons-volume">
                    <div>
                        <AiFillSound/>
                    </div>
                    <div>
                        ---
                    </div>
                </div>
                <div>
                    <FaRegWindowRestore/>
                </div>
                <div>
                    <SlSizeFullscreen/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Player