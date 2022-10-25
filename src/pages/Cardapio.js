import './cardapio.style.css'
import Fade from 'react-reveal/Fade';
import Partecardapio from '../layouts/partecardapio'
import img1 from '../images/foto-espeto.jpeg'
import img2 from '../images/porcao2.jpeg'
import img3 from '../images/foto-cerveja.jpg'
import img4 from '../images/drink.jpg'
import img5 from '../images/dose.jpg'


function Cardapio(){
return(<>

<div className='container_background_cardapio'>
        
        <div className='escrita_background_cardapio'>
            <Fade duration={1500}>
            <h1>Cardápio</h1>
            </Fade>
        </div>
    </div>

    <main className='main main-cardapio'>
        <div className='container_principal'>
                <Partecardapio img={img1} 
                    title="Espetos"
                    list={[
                    'Espeto Ofical -------------R$ 10.50',
                    'Kafta --------------R$ 9.50',
                    'Alcatra --------------R$ 9.50',
                    'Picanha --------------R$ 13.90',
                    'Filé Mignon --------------R$ 13.90',
                    'Linguicinha --------------R$ 8.50',
                    'Medalhão de Frango --------------R$ 9.00',
                    'Queijo Coalho -------------R$ 5.50',
                    'Coração -------------R$ 7.50',        
                    'Pão de Alho -------------R$ 4.50']}
                    />
                <Partecardapio img={img2} 
                    title="Porções"
                    list={[
                    'Contra Filé --------------R$ 54.00',
                    'Panceta --------------R$ 42.00',          
                    'Batata Frita --------------R$ 18.00',           
                    'Coxinha de Frango --------------R$ 22.90',          
                    'Mini Pastel --------------R$ 23.50',
                    'Quibe --------------R$ 25.00',           
                    'Calabreza --------------R$ 19.90',       
                    'Picanha --------------R$ 75.00',            
                    'Isca de Tilápia --------------R$ 37.90',
                    'Ponta de peito --------------R$ 46.00']}
                    />
        </div>
        <div className='container_principal'>
                <Partecardapio img={img3} 
                    title="Cervejas"
                    list={[
                    'Heineken----------------R$ 14.50',
                    'Eisenbain------------------R$ 10.00',                     
                    'Budweiser----------------R$ 9.90',                          
                    'Império----------------R$ 8.90',                      
                    'Petra----------------R$ 8.90',                         
                    'Original---------------R$ 10.90',                         
                    'Brahma----------------R$ 8.50',                      
                    'Skol----------------R$ 8.50',                         
                    'Cacilds ----------------R$ 9.00',                        
                    'Tiger ----------------R$ 10.90']}
                    />
                <Partecardapio img={img4} 
                    title="Drinks"
                    list={[
                    'Gim Tônica --------------R$ 21.90',
                    'Capirinha Pinga --------------R$ 15.50',                            
                    'Capirinha Vodka --------------R$ 17.90',                            
                    'Capirinha Sakê --------------R$ 17.90',                           
                    'Capirinha Absolut --------------R$ 20.90',                           
                    'Sex On The Beach -------------R$ 19.90',                            
                    'Margarita-------------R$ 19.90',                          
                    'Campari -------------R$ 16.00',                           
                    'Jack Apple e Tônica -------------R$ 22.90',                            
                    'Mojito -------------R$ 16.90']}
                    />             
                </div>
                <div className='container_principal'> 
                <Partecardapio img={img5} 
                    title="Doses"
                    list={[
                    'Absolut --------------R$ 12.90',
                    'Red Label --------------R$ 12.90' ,                           
                    'Black Label --------------R$ 18.90' ,                           
                    'Jack Daniels --------------R$ 18.90' ,                          
                    'Chivas --------------R$ 18.90' ,                           
                    'Tequila -------------R$ 12.90' ,                           
                    'Licor 43 --------------R$ 22.90',                            
                    'Cachaça Cabaré --------------R$ 8.90' ,                           
                    'Margarita --------------R$ 18.90' ,                          
                    'Gin Tropical --------------R$ 23.90']}
                />

        </div>
                    <div className='container_btn'>
                        <a href='https://oficial-chopp-e-espeto-jk.goomer.app/menu'  rel="noreferrer" target="_blank" >
                        <button className='btn'>Menu Completo</button>
                        </a>
                    </div>
    </main>

    </>)
}
export default Cardapio