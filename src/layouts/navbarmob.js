import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaAngleDown, FaAngleUp } from "react-icons/fa";
import './navbarmob.style.css'


function NavbarMob(){

    const [visible, setVisible] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    
    useEffect(()=>{
        document.body.style.overflowY= visible ? 'hidden' : 'auto'
    },[visible])

    const toggle = () => {
        setVisible(!visible)
        if(visible === false){
            setShowMenu(false)
        }
    }
    const toggleInsideMenu = () => {
        setShowMenu(!showMenu)
        
        console.log(showMenu);
    }
   
return(
    <>
    <FaBars className='bars' onClick={toggle} />
    <div className={visible ? 'menu menu-active' : 'menu'}>
        <nav>
            <ul className={visible ? 'list-menu list-menu-active' : 'list-menu'}>
                <li onClick={toggle}><Link to="/">Home</Link></li>
                <li onClick={toggle}><Link to="/cardapio">Cardápio</Link></li>
                <li onClick={toggle}><a href="#footer">Contato</a></li>
                <li onClick={toggle}><a href="https://www.ifood.com.br/delivery/sao-jose-do-rio-preto-sp/oficial-chopp--espeto-jk-jardim-panorama/0b49c1ef-5b64-4154-86ba-20d2053a1e8a" rel='noreferrer' target="_blank">Ifood</a></li>
                <li><a onClick={toggleInsideMenu}  href='#'>Reservas { visible ? [showMenu ? <FaAngleUp className="arrowdown"/>  : <FaAngleDown className="arrowup"/> ] : [<FaAngleDown className="arrowup"/>] } </a></li>
                      <div className={ showMenu ? 'reservas reservas-active' : 'reservas'}>
                        <li><a href="https://api.whatsapp.com/send?phone=55173364-9891"  target="_blank" rel="noreferrer">Oficial Jk</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=55173363-9899"  target="_blank" rel="noreferrer">Oficial Andaló </a></li>
                        </div> 
            </ul>
        </nav>
     
        </div>
        </>
)

}

export default NavbarMob