import './partecardapio.style.css'
import ModalImage from "react-modal-image";
import Fade from 'react-reveal/Fade';


function Partecardapio({img, title, list}){
    return(
        <>
           
                <Fade duration={1500}>
            <div className='container_secundario'>                
                <div className='container_img'>
                    <img className='img' src={img} alt="" />
                    {/* <ModalImage
                        small={img}
                        large={img}
                        alt={title}
                        hideDownload={true}
                        hideZoom={false}
                        className="img"
                        /> */}
                    
                </div>
                <div className='container_cardapio' >
                <h1>{title}</h1>
                <ul>
                {list.map(link=>{
                        return(
                            <li>{link}</li>
                        )
                        })}
                </ul>
                </div>
                </div>
                </Fade>
        </>
    )
}
export default Partecardapio