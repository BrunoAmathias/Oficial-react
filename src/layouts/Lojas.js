import './lojas.style.css'
import ModalImage from "react-modal-image";
import Fade from 'react-reveal/Fade';



function Lojas({img, text, NomeLoja}){


    
    

    return(<>
        
        <div className='container'>
            <div className="container_img">
            <Fade>
            <ModalImage
              small={img}
              large={img}
              alt={NomeLoja}
              hideDownload={true}
              hideZoom={false}  
              className="foto"
            /></Fade>
            </div>
            <div className='container_paragrafo'>
                <Fade duration={2000}>
                <p><span className='nome_Loja'>{NomeLoja}</span>{text}</p>
                </Fade>
            </div>
        </div>


     
        </>
    )
}
export default Lojas