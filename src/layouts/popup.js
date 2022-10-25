import { useState } from 'react'
import {IoCloseOutline} from 'react-icons/io5'
import './popup.style.css'


function Popup({img}){

const [popUpOpen, setPopUpOpen] = useState(true)

function popUpToggle(){
    setPopUpOpen(!popUpOpen)
    if(popUpOpen === true){
      setInterval( () => {
        setPopUpOpen(true)
      }, 90000)
    }
 
}

return(
    <div className='container-center'>
   <div className = {popUpOpen ? 'container-popup' : 'popup-close'}>
  <IoCloseOutline onClick={popUpToggle} className='btn-close-popup'/>
  <div className='container-img-popup'>
    <img className='img-popup' src={img} alt='foto-propaganda'/>
  </div>
</div>
</div>
)

}
export default Popup