import './partecardapio.style.css'
import ModalImage from "react-modal-image";

function Partecardapio({img, title, list}){
    return(
        <>
           

            <div className='container_secundario'>                
                <div className='container_img'>
                    <ModalImage
                        small={img}
                        large={img}
                        alt={title}
                        hideDownload={true}
                        hideZoom={false}
                        className="img"
                        />
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
        </>
    )
}
export default Partecardapio