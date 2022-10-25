import './container.style.css'

function Container(props){
    return(
        <div className={props.customClass}>{props.children}</div>
        
    )
}
export default Container