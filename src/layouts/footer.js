import logo from "../images/logo2.png"
import insta from "../images/insta126.png"
import face from "../images/o-facebook.png"
import email from "../images/e-mail.png"
import './footer.style.css'




function Footer(){
    return(
        <footer id="footer" className="footer">
        <div  className="container-footer">

       
            <div>
                <img className="logo" alt="foto" src={logo}/>
                <div className="container_social">
                <a href="https://www.instagram.com/jkoficialchoppespeto/" target="_blank" rel="noreferrer">
                    <img className="img_social" alt="foto" src={insta} />
                </a>
                <a href="https://www.facebook.com/oficialchoppeespetoandalo" target="_blank" rel="noreferrer">
                    <img className="img_social" alt="foto" src={face}/>
                </a>
                <a href="mailto:contato@oficialchoppespeto.com.br" target="_blank" rel="noreferrer">
                    <img className="img_social" alt="foto" src={email} />
                </a>
                </div>
            </div>
            <div className="info">
                <h1>Endereços</h1>
                <a href="https://www.google.com/maps/place/Av.+Pres.+Juscelino+K.+de+Oliveira,+385+-+Jardim+Panorama,+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP,+15092-415/@-20.8285601,-49.4041577,17z/data=!4m5!3m4!1s0x94bdb280ef8d542d:0xabdb67de6c3f5698!8m2!3d-20.828614!4d-49.4040774" target="_blank" rel="noreferrer">Av. Pres. Juscelino K. de Oliveira, 385 - Jardim Panorama</a>
                <a href="https://www.google.com/maps/place/Av.+Dr.+Alberto+Andal%C3%B3,+3681+-+Centro,+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP,+15025-130/@-20.8187,-49.384283,17z/data=!4m13!1m7!3m6!1s0x94bdad5f65a57299:0xf1816ad8f680f799!2sAv.+Dr.+Alberto+Andal%C3%B3,+3681+-+Centro,+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP,+15025-130!3b1!8m2!3d-20.8187!4d-49.3820943!3m4!1s0x94bdad5f65a57299:0xf1816ad8f680f799!8m2!3d-20.8187!4d-49.3820943" target="_blank" rel="noreferrer">Av. Dr. Alberto Andaló, 3681 - Centro</a>
                <a href="https://www.google.com/maps/place/Av.+Brg.+Faria+Lima,+5160+-+Vila+Sao+Jose,+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP,+15090-000/@-20.8256055,-49.3970001,17z/data=!3m1!4b1!4m5!3m4!1s0x94bdb29cdc014da5:0x82a6e6f932ed85a2!8m2!3d-20.8256105!4d-49.3948114" target="_blank" rel="noreferrer"> Av. Brg Faria Lima, 5160 - Vila São Manoel</a>
            </div>
            <div className="info horario">
                <h1>Atendimento</h1>
                <p>Unidade JK</p>
                <ul>
                    <li>Terça á Sexta - 17:30 ás 00:30</li>
                    <li>Aos Sábados e Domingos</li>
                    <li>Das 16:30 ás 00:30</li>
                </ul>
                <p>Unidade Andaló</p>
                <ul>
                    <li>Terça á Sexta - 17:30 ás 00:30</li>
                    <li>Aos Sábados e Domingos</li>
                    <li>Das 16:30 ás 00:30</li>
                </ul>
                <p>Unidade Brigadeiro</p>
                <ul>
                    <li>Terça á Sexta - 17:30 ás 00:30</li>
                    <li>Aos Sábados e Domingos</li>
                    <li>Das 16:30 ás 00:30</li>
                </ul>
            </div>
            </div>
           
            <div className="copy">
                <p>Copyright © 2022 Oficial Chopp & Espeto</p>
            </div>

        </footer>

    )
}
export default Footer