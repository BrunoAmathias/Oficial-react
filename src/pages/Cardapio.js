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
                    'Espeto Oficial -------------R$ 12.00',
                    'Kafta --------------R$ 11.00',
                    'Alcatra --------------R$ 11.00',
                    'Picanha --------------R$ 14.50',
                    'Filé Mignon --------------R$ 14.50',
                    'Linguicinha --------------R$ 9.00',
                    'Medalhão de Frango --------------R$ 11.00',
                    'Queijo Coalho -------------R$ 7.00',
                    'Coração -------------R$ 8.50',        
                    'Pão de Alho -------------R$ 5.00']}
                    />
                <Partecardapio img={img2} 
                    title="Porções"
                    list={[
                    'Contra Filé --------------R$ 57.00',
                    'Panceta --------------R$ 42.00',          
                    'Batata Frita --------------R$ 22.00',           
                    'Coxinha de Frango --------------R$ 25.00',          
                    'Mini Pastel --------------R$ 26.00',
                    'kibe --------------R$ 25.00',           
                    'Calabreza --------------R$ 25.00',       
                    'Picanha c/ Catupiry ---------R$ 59.00',            
                    'Isca de Tilápia --------------R$ 40.00',
                    'Ponta de peito --------------R$ 60.00']}
                    />
        </div>
        <div className='container_principal'>
                <Partecardapio img={img3} 
                    title="Cervejas"
                    list={[
                    'Heineken----------------R$ 15.50',
                    'Eisenbain------------------R$ 11.00',                     
                    'Budweiser----------------R$ 13.50',                          
                    'Império----------------R$ 9.50',                      
                    'Petra----------------R$ 9.50',                         
                    'Original---------------R$ 12.00',                         
                    'Brahma----------------R$ 9.50',                      
                    'Skol----------------R$ 9.50',                         
                    'Cacilds ----------------R$ 9.50'                   
                    ]}
                    />
                <Partecardapio img={img4} 
                    title="Drinks"
                    list={[
                    'Gim Tônica --------------R$ 24.00',
                    'Capirinha Pinga --------------R$ 17.50',                            
                    'Capirinha Vodka --------------R$ 19.50',                            
                    'Capirinha Sakê --------------R$ 19.50',                           
                    'Capirinha Absolut --------------R$ 22.00',                           
                    'Sex On The Beach -------------R$ 22.00',                            
                    'Margarita-------------R$ 22.00',                          
                    'Campari -------------R$ 17.00',                           
                    'Jack Apple e Tônica -------------R$ 28.00',                            
                    'Mojito -------------R$ 17.00']}
                    />             
                </div>
                <div className='container_principal'> 
                <Partecardapio img={img5} 
                    title="Doses"
                    list={[
                    'Absolut --------------R$ 14.00',
                    'Red Label --------------R$ 14.00' ,                           
                    'Black Label --------------R$ 20.00' ,                           
                    'Jack Daniels --------------R$ 19.00' ,                          
                    'Chivas --------------R$ 19.00' ,                           
                    'Tequila -------------R$ 15.00' ,                           
                    'Licor 43 --------------R$ 25.00',                            
                    'Cachaça Cabaré --------------R$ 8.90' ,                           
                    'Margarita --------------R$ 22.00'                          
                    ]}
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