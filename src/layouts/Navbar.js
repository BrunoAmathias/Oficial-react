import {Link} from 'react-router-dom'
import logo from "../images/logo2.png"
import './navbar.style.css'
import NavbarMob from './navbarmob';
import { useState } from 'react';



function Navbar(){

const [subMenu, setSubMeunu] = useState(false)   

function toggleSubMenu(){
    setSubMeunu(!subMenu)
    console.log(subMenu);
}

function closeSubMenu(){
    setSubMeunu(false)
}

return(
    <div className="container_header">
    <header onMouseLeave={closeSubMenu} className="header">
        
        <img src={logo} alt="logo" ></img>
        <nav className='nav_desk'>
            <ul className='list-principal'>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/cardapio" >Cardápio</Link></li>
                <li><a href="#footer">Contato</a></li>
                <li><a href="https://www.ifood.com.br/delivery/sao-jose-do-rio-preto-sp/oficial-chopp--espeto-jk-jardim-panorama/0b49c1ef-5b64-4154-86ba-20d2053a1e8a" rel='noreferrer' target="_blank">Ifood</a></li>
                <li className={subMenu ? 'btnMenuSub btnMenuSubOpen' : 'btnMenuSub'}><a onClick={toggleSubMenu} href='#'>Reservas</a>
                <ul className={subMenu ? 'subMenu subMenuOpen' : "subMenu"}>
                    <li><a href='https://web.whatsapp.com/send?phone=55173364-9891"' rel='noreferrer' target="_blank">Oficial JK</a></li>
                    <li><a href='https://web.whatsapp.com/send?phone=551733639899' rel='noreferrer' target="_blank">Oficial Andaló</a></li>
                </ul>
                </li>
            </ul>

        </nav>

        
        <NavbarMob/>
    </header>
    </div>
)

}
export default Navbar