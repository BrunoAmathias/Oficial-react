import './lojas.style.css'
import ModalImage from "react-modal-image";



function Lojas({img, text, NomeLoja}){


    
    

    return(<>
        
        <div className='container'>
            <div className="container_img">
            <ModalImage
              small={img}
              large={img}
              alt={NomeLoja}
              hideDownload={true}
              hideZoom={false}  
              className="foto"
            />
            </div>
            <div className='container_paragrafo'>
                <p><span className='nome_Loja'>{NomeLoja}</span>{text}</p>
            </div>
        </div>


     
        </>
    )
}
export default Lojas