import './sobre.style.css'
import Fade from 'react-reveal/Fade';

function Sobre({title, text}){
return(

<div className="container_missao">
    <Fade right>
    <h1>{title}</h1>
    <p>{text}</p>
    </Fade>
</div>)
}
export default Sobre